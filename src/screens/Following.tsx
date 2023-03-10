import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import ThemeContext from '../theme/context';
import FollowingStyles from '../styles/screens/Following';
import { IFollowingProps, IFollowingState } from '../types/screens/Following';
import { IThemeContext } from '../types/theme/context';

export default class LogIn extends Component<IFollowingProps, IFollowingState> {
  static contextType = ThemeContext;
  declare context: IThemeContext;

  constructor(props: IFollowingProps) {
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
      <View style={FollowingStyles(this.context).screen.style.container}>
        <Text style={FollowingStyles(this.context).screen.style.text}>
          Open up ./src/screens/Following.tsx to start working on your app!
        </Text>
        <Button
          title={'Go to Details'}
          onPress={() => {
            this.props.navigation.navigate('Details');
          }}
        />
        <Text>{`Searched: ${this.state.search}`}</Text>
      </View>
    );
  }
}
