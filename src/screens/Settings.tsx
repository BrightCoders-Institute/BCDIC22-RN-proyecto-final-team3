import React, { Component } from 'react';
import { Switch, View, Image } from 'react-native';
import { DataTable } from 'react-native-paper';
import { EventRegister } from 'react-native-event-listeners';
import CButton from '../components/CButton';
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

  onThemeChange = (value: boolean) => {
    EventRegister.emit('changeTheme', value ? 'dark' : 'light');
  };

  render() {
    return (
      <View style={SettingsStyles(this.context).screen.style.container}>
        <View style={SettingsStyles(this.context).screen.style.content}>
          <View style={SettingsStyles(this.context).screen.style.imageContainer}>
            <Image style={SettingsStyles(this.context).screen.style.image} source={require('../assets/usericon.png')} />
          </View>
          <DataTable>
            <DataTable.Row style={SettingsStyles(this.context).screen.style.dividerOff}>
              <DataTable.Cell
                style={SettingsStyles(this.context).screen.style.cellCenter}
                textStyle={SettingsStyles(this.context).screen.style.text}
              >
                example@email.com
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row style={SettingsStyles(this.context).screen.style.dividerOff}>
              <DataTable.Cell textStyle={SettingsStyles(this.context).screen.style.text}>DarkMode</DataTable.Cell>
              <DataTable.Cell style={SettingsStyles(this.context).screen.style.cellEnd}>
                <Switch value={this.context.isDark} onValueChange={this.onThemeChange} />
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row style={SettingsStyles(this.context).screen.style.dividerOff}>
              <DataTable.Cell style={SettingsStyles(this.context).screen.style.cellCenter}>
                <CButton
                  style={SettingsStyles(this.context).logOutButton}
                  title='Logout'
                  onPress={() => this.props.navigation.navigate('LogIn')}
                />
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </View>
      </View>
    );
  }
}
