import React, { Component } from 'react';
import { Switch, View, TouchableOpacity, Text } from 'react-native';
import { DataTable } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { EventRegister } from 'react-native-event-listeners';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import SettingsStyles from '../styles/screens/Settings';
import ThemeContext from '../theme/context';
import { ISettingsProps } from '../types/screens/Settings';
import { IThemeContext } from '../types/theme/context';

export default class Settings extends Component<ISettingsProps> {
  static contextType = ThemeContext;
  declare context: IThemeContext;

  constructor(props: ISettingsProps) {
    super(props);
  }

  onThemeChange = async (value: boolean) => {
    EventRegister.emit('changeTheme', value ? 'dark' : 'light');
    await this.saveOnFirebase(value ? 'dark' : 'light');
  };

  saveOnFirebase = async (theme: 'dark' | 'light') => {
    await firestore().collection('users').doc(auth().currentUser?.uid).set({
      settings: {
        theme,
      },
    });
  };

  render() {
    return (
      <View style={SettingsStyles(this.context).screen.style.container}>
        <View style={SettingsStyles(this.context).screen.style.content}>
          <DataTable>
            <DataTable.Row style={SettingsStyles(this.context).screen.style.dividerOff}>
              <MaterialCommunityIcons
                style={SettingsStyles(this.context).screen.icon.style}
                name='account'
                size={SettingsStyles(this.context).screen.icon.size}
                color={SettingsStyles(this.context).screen.icon.color}
              />
              <DataTable.Cell textStyle={SettingsStyles(this.context).screen.style.text}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Account')}>
                  <Text style={SettingsStyles(this.context).screen.style.text}>Account</Text>
                </TouchableOpacity>
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row style={SettingsStyles(this.context).screen.style.dividerOff}>
              <MaterialCommunityIcons
                style={SettingsStyles(this.context).screen.icon.style}
                name='theme-light-dark'
                size={SettingsStyles(this.context).screen.icon.size}
                color={SettingsStyles(this.context).screen.icon.color}
              />
              <DataTable.Cell textStyle={SettingsStyles(this.context).screen.style.text}>DarkMode</DataTable.Cell>
              <DataTable.Cell style={SettingsStyles(this.context).screen.style.cellEnd}>
                <Switch value={this.context.isDark} onValueChange={async (value) => await this.onThemeChange(value)} />
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </View>
      </View>
    );
  }
}
