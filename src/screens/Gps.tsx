import React, { Component } from 'react';
import { Alert, Button, Linking, Platform, Text, View } from 'react-native';
import * as Location from 'expo-location';
import * as IntentLauncher from 'expo-intent-launcher';
import * as TaskManager from 'expo-task-manager';
import OWMA from '../clients/OWMA';
import CWWidget from '../components/CWWidget';
import CWInfo from '../components/CWInfo';
import GpsStyles from '../styles/screens/Gps';
import ThemeContext from '../theme/context';
import { IGpsProps, IGpsState } from '../types/screens/Gps';
import { IThemeContext } from '../types/theme/context';

export default class Gps extends Component<IGpsProps, IGpsState> {
  static contextType = ThemeContext;
  declare context: IThemeContext;

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
      conditions: undefined,
      search: '',
      tasks: {
        location: 'CURRENT_LOCATION',
      },
    };
  }

  setUpSearch = () => {
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
  };

  setUpLocation = async () => {
    const isLocationEnabled = await Location.hasServicesEnabledAsync();
    let isPermissionAllowed = await Location.getForegroundPermissionsAsync();
    if (!isPermissionAllowed.granted) {
      if (isPermissionAllowed.canAskAgain) {
        isPermissionAllowed = await Location.requestForegroundPermissionsAsync();
      } else {
        Alert.alert('Permission denied', 'Please allow location permission in settings', [
          { text: 'Cancel' },
          { text: 'Allow permission', onPress: () => this.openAppSettings() },
        ]);
      }
    }
    if (!isLocationEnabled) {
      Alert.alert('Gps disabled', 'Turn on GPS to get location weather', [
        { text: 'Cancel' },
        { text: 'Turn on', onPress: () => this.openLocationSettings() },
      ]);
    }

    (async () => {
      const foreground = await Location.requestForegroundPermissionsAsync();
      if (foreground) {
        this.startForegroundUpdate();
      }
      if (foreground.granted) {
        await Location.requestBackgroundPermissionsAsync();
      }
      setInterval(async () => {
        const locationEnabled = await Location.hasServicesEnabledAsync();
        this.setState({
          location: { ...this.state.location, enabled: locationEnabled },
        });
        this.setWeatherLocation();
        if (locationEnabled && foreground) {
          this.startForegroundUpdate();
        }
      }, 5000);
    })();
  };

  setWeatherLocation = async () => {
    if (!this.state.location.data) return;
    if (this.state.conditions !== undefined) return;
    this.setState({
      conditions: await OWMA.getCurrent({
        coordinates: {
          lat: this.state.location.data.coords.latitude,
          lon: this.state.location.data.coords.longitude,
        },
      }),
      location: {
        ...this.state.location,
        data: {
          ...this.state.location.data,
          city: await OWMA.getLocation({
            coordinates: {
              lat: this.state.location.data.coords.latitude,
              lon: this.state.location.data.coords.longitude,
            },
          }),
        },
      },
    });
  };

  openAppSettings = () => {
    if (Platform.OS === 'android') Linking.openSettings();
    if (Platform.OS === 'ios') Linking.openURL('app-settings:');
  };

  openLocationSettings = () => {
    if (Platform.OS === 'android')
      IntentLauncher.startActivityAsync(IntentLauncher.ActivityAction.LOCATION_SOURCE_SETTINGS);
    if (Platform.OS === 'ios') Linking.openURL('app-settings:');
  };

  startCurrentLocationTask = async () => {
    TaskManager.defineTask(this.state.tasks.location, async ({ data, error }) => {
      if (error) return;
      if (data) {
        const { locations } = data as { locations: Location.LocationObject[] };
        const location = locations[0];
        if (location) {
          this.setState({
            location: {
              ...this.state.location,
              data: { ...this.state.location.data, coords: location.coords, timestamp: location.timestamp },
            },
          });
          await this.setWeatherLocation();
        }
      }
    });
  };

  startBackgroundUpdate = async () => {
    await this.startCurrentLocationTask();
    const { granted } = await Location.getBackgroundPermissionsAsync();
    if (!granted) return;
    const isTaskDefined = await TaskManager.isTaskDefined(this.state.tasks.location);
    if (!isTaskDefined) return;
    const hasStarted = await Location.hasStartedLocationUpdatesAsync(this.state.tasks.location);
    if (hasStarted) return;
    await Location.startLocationUpdatesAsync(this.state.tasks.location, {
      accuracy: Location.Accuracy.Lowest,
      showsBackgroundLocationIndicator: true,
      foregroundService: {
        notificationTitle: 'WWU',
        notificationBody: 'Tracking your location',
        notificationColor: '#fff',
      },
    });
  };

  startForegroundUpdate = async () => {
    const { granted } = await Location.getForegroundPermissionsAsync();
    const locationEnabled = await Location.hasServicesEnabledAsync();
    if (!granted) return;
    if (granted && locationEnabled && this.state.events.location.update === undefined) {
      try {
        this.state.events.location.update = await Location.watchPositionAsync(
          {
            accuracy: Location.Accuracy.BestForNavigation,
          },
          async ({ coords, timestamp }) => {
            this.setState({
              location: {
                ...this.state.location,
                data: { ...this.state.location.data, coords: coords, timestamp: timestamp },
                enabled: granted,
              },
            });
            await this.setWeatherLocation();
          }
        );
      } catch (error) {
        if (error instanceof Error) {
          this.state.events.location.update?.remove();
          this.setState({
            location: {
              ...this.state.location,
              data: undefined,
              enabled: granted,
              message: error.message,
            },
          });
          await this.setWeatherLocation();
        }
      }
    }
  };

  stopBackgroundUpdate = async () => {
    const hasStarted = await Location.hasStartedLocationUpdatesAsync(this.state.tasks.location);
    if (hasStarted) {
      await Location.stopLocationUpdatesAsync(this.state.tasks.location);
      this.setState({ location: { ...this.state.location, data: undefined } });
      await this.setWeatherLocation();
    }
  };

  stopForegroundUpdate = () => {
    this.state.events.location.update?.remove();
    (async () => {
      this.setState({
        location: { ...this.state.location, data: undefined, enabled: await Location.hasServicesEnabledAsync() },
      });
      await this.setWeatherLocation();
    })();
  };

  async componentDidMount() {
    this.setUpSearch();
    await this.setUpLocation();
  }

  componentWillUnmount() {
    this.stopForegroundUpdate();
  }

  render() {
    if (this.state.conditions && this.state.location.data?.city) {
      return (
        <View style={GpsStyles(this.context).screen.style.container}>
          <View style={GpsStyles(this.context).screen.style.content}>
            <CWWidget
              style={GpsStyles(this.context).weatherWidget}
              data={{
                city: this.state.location.data.city,
                degrees: this.state.conditions.weather.temp.cur,
                icon: this.state.conditions.weather.icon.url,
              }}
            />
            <View>
              <CWInfo data={this.state.conditions} style={GpsStyles(this.context).weatherInfo} />
            </View>

            <Text style={GpsStyles(this.context).screen.style.text}>
              Open up ./src/screens/Gps.tsx to start working on your app!
            </Text>
            <Text>{`Searched: ${this.state.search}`}</Text>
            <Text>{`Location: ${this.state.location.enabled}`}</Text>
            {this.state.location.enabled && this.state.location.data && (
              <View>
                <Text>{`Latitude: ${this.state.location.data.coords.latitude}`}</Text>
                <Text>{`Longitude: ${this.state.location.data.coords.longitude}`}</Text>
              </View>
            )}
            <Button
              title='Enable GPS'
              onPress={() => {
                this.setUpLocation();
              }}
            />
            <Button
              title='Get GPS'
              onPress={() => {
                console.log(this.state.location);
              }}
            />
          </View>
        </View>
      );
    }
  }
}
