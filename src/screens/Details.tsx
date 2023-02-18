import React, { Component } from 'react';
import { Text, View } from 'react-native';
import ThemeContext from '../theme/ThemeContext';
import DetailsStyles from '../styles/Details';
import { IDetailsProps, IDetailsContext } from '../types/Details';

export default class LogIn extends Component<IDetailsProps> {
  static contextType = ThemeContext;
  declare context: IDetailsContext;

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
