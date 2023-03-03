import React, { Component } from 'react';
import { Text, View } from 'react-native';
import ThemeContext from '../theme/context';
import DetailsStyles from '../styles/screens/Details';
import { IDetailsProps } from '../types/screens/Details';
import { IThemeContext } from '../types/theme/context';

export default class LogIn extends Component<IDetailsProps> {
  static contextType = ThemeContext;
  declare context: IThemeContext;

  constructor(props: IDetailsProps) {
    super(props);
  }

  render() {
    return (
      <View style={DetailsStyles(this.context).screen.style.container}>
        <Text style={DetailsStyles(this.context).screen.style.text}>
          Open up ./src/screens/Details.tsx to start working on your app!
        </Text>
      </View>
    );
  }
}
