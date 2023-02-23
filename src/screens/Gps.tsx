import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';
import ThemeContext from '../theme/ThemeContext';
import GpsStyles from '../styles/Gps';
import { IGpsProps, IGpsState, IGpsContext } from '../types/Gps';

const LOCATION_TASK_NAME = 'LOCATION_TASK_NAME';

export default class Gps extends Component<IGpsProps, IGpsState> {
  static contextType = ThemeContext;
  declare context: IGpsContext;

  constructor(props: IGpsProps) {
    super(props);
    this.state = {
      events: {
        navigation: {
          focus: undefined,
        },
        location: {
          update: undefined,
        },
      },
      location: {
        enabled: undefined,
        data: undefined,
        message: undefined,
      },
      search: '',
    };
  }

  startBackgroundTask = async () => {
    // Define the background task for location tracking
    TaskManager.defineTask(LOCATION_TASK_NAME, async ({ data, error }) => {
      console.log(error);
      if (error) return;

      if (data) {
        // Extract location coordinates from data
        const { locations } = data as { locations: Location.LocationObject[] };
        const location = locations[0];
        if (location) {
          this.setState({ location: { ...this.state.location, data: location } });
        }
      }
    });
  };

  startForegroundUpdate = async () => {
    // Check if foreground permission is granted
    const { granted } = await Location.getForegroundPermissionsAsync();
    if (!granted) return;

    // Make sure that foreground location tracking is not running
    this.state.events.location.update?.remove();

    // Start watching position in real-time
    this.state.events.location.update = await Location.watchPositionAsync(
      {
        // For better logs, we set the accuracy to the most sensitive option
        accuracy: Location.Accuracy.BestForNavigation,
      },
      (location) => {
        this.setState({ location: { ...this.state.location, data: location } });
      }
    );
  };

  stopForegroundUpdate = () => {
    this.state.events.location.update?.remove();
    this.setState({ location: { ...this.state.location, data: undefined } });
  };

  startBackgroundUpdate = async () => {
    await this.startBackgroundTask();
    // Don't track position if permission is not granted
    const { granted } = await Location.getBackgroundPermissionsAsync();
    if (!granted) return;

    // Make sure the task is defined otherwise do not start tracking
    const isTaskDefined = await TaskManager.isTaskDefined(LOCATION_TASK_NAME);
    if (!isTaskDefined) return;

    // Don't track if it is already running in background
    const hasStarted = await Location.hasStartedLocationUpdatesAsync(LOCATION_TASK_NAME);
    if (hasStarted) return;

    await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
      // For better logs, we set the accuracy to the most sensitive option
      accuracy: Location.Accuracy.Lowest,
      // Make sure to enable this notification if you want to consistently track in the background
      showsBackgroundLocationIndicator: true,
      foregroundService: {
        notificationTitle: 'Location',
        notificationBody: 'Location tracking in background',
        notificationColor: '#fff',
      },
    });
  };

  stopBackgroundUpdate = async () => {
    const hasStarted = await Location.hasStartedLocationUpdatesAsync(LOCATION_TASK_NAME);
    if (hasStarted) {
      await Location.stopLocationUpdatesAsync(LOCATION_TASK_NAME);
      this.setState({ location: { ...this.state.location, data: undefined } });
    }
  };

  componentDidMount() {
    this.props.navigation.setOptions({
      headerSearchBarOptions: {
        placeholder: 'Search',
        onSearchButtonPress: (e) => {
          this.setState({ search: e.nativeEvent.text });
        },
        onClose: () => {
          this.setState({ search: '' });
        },
      },
    });
    const requestPermissions = async () => {
      const foreground = await Location.requestForegroundPermissionsAsync();
      if (foreground) {
        this.startForegroundUpdate();
      }
      if (foreground.granted) {
        await Location.requestBackgroundPermissionsAsync();
        this.startBackgroundUpdate();
      }
      this.setState({ location: { ...this.state.location, enabled: await Location.hasServicesEnabledAsync() } }); // Not working
    };
    requestPermissions();
  }

  componentWillUnmount() {
    this.stopForegroundUpdate();
    this.stopBackgroundUpdate();
  }

  render() {
    return (
      <View style={GpsStyles(this.context).screen.style.container}>
        <Text style={GpsStyles(this.context).screen.style.text}>
          Open up ./src/screens/Gps.tsx to start working on your app!
        </Text>
        <Text>{`Searched: ${this.state.search}`}</Text>
        <Text>{`Location: ${this.state.location.enabled}`}</Text>
        {this.state.location.enabled && this.state.location.data && (
          <View>
            <Text>{`Latitude: ${this.state.location.data.coords.latitude}`}</Text>
            <Text>{`Longitude: ${this.state.location.data.coords.longitude}`}</Text>
            <Button
              title='Get GPS'
              onPress={() => {
                console.log(this.state.location);
              }}
            />
          </View>
        )}
      </View>
    );
  }
}
