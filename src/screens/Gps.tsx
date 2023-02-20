import React, { Component } from 'react';
import { Text, View } from 'react-native';
import ThemeContext from '../theme/ThemeContext';
import GpsStyles from '../styles/Gps';
import { IGpsProps, IGpsState, IGpsContext } from '../types/Gps';

export default class Gps extends Component<IGpsProps, IGpsState> {
  static contextType = ThemeContext;
  declare context: IGpsContext;

  constructor(props: IGpsProps) {
    super(props);
    this.state = {
      search: '',
    };
  }

  componentDidMount() {
    this.props.navigation.setOptions({
      headerSearchBarOptions: {
        placeholder: 'Search',
        onSearchButtonPress: (e) => {
          this.setState({ search: e.nativeEvent.text });
        },
      },
    });
  }

  render() {
    return (
      <View style={GpsStyles(this.context).screen.style.container}>
        <Text style={GpsStyles(this.context).screen.style.text}>
          Open up ./src/screens/Gps.tsx to start working on your app!
        </Text>
        <Text>{`Searched: ${this.state.search}`}</Text>
      </View>
    );
  }
}
