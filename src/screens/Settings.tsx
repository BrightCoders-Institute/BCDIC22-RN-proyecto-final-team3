import React, { Component } from 'react';
import { Switch, View, Image } from 'react-native';
import { DataTable } from 'react-native-paper';
import { EventRegister } from 'react-native-event-listeners';
import ThemeContext from '../theme/context';
import SettingsStyles from '../styles/screens/Settings';
import { ISettingsProps } from '../types/screens/Settings';
import { IThemeContext } from '../types/theme/context';
import CButton from '../components/CButton';

export default class LogIn extends Component<ISettingsProps> {
  static contextType = ThemeContext;
  declare context: IThemeContext;

  constructor(props: ISettingsProps) {
    super(props);
  }

  onThemeChange = (value: boolean) => {
    EventRegister.emit('changeTheme', value ? 'dark' : 'light');
  };

  render() {
    return (
      <View style={SettingsStyles(this.context).screen.style.container}>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
          <Image style={{ width: 150, height: 150 }} source={require('../../img/usericon.png')} />
        </View>
        <View style={{ margin: 30 }}>
          <DataTable>
            <DataTable.Row>
              <DataTable.Cell>DarkMode</DataTable.Cell>
              <DataTable.Cell style={{ justifyContent: 'flex-end' }}>
                <Switch value={this.context.isDark} onValueChange={this.onThemeChange} />
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell style={{ justifyContent: 'center' }}>
                <CButton title='Logout' onPress={() => this.props.navigation.navigate('LogIn')} />
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </View>
      </View>
    );
  }
}
