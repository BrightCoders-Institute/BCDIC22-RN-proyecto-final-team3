import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { DataTable } from 'react-native-paper';
import { EventRegister } from 'react-native-event-listeners';
import auth from '@react-native-firebase/auth';
import CButton from '../components/CButton';
import { GoogleSignin } from '../firebase/config';
import AccountStyles from '../styles/screens/Account';
import ThemeContext from '../theme/context';
import { IAccountProps } from '../types/screens/Account';
import { IThemeContext } from '../types/theme/context';

export default class Account extends Component<IAccountProps> {
  static contextType = ThemeContext;
  declare context: IThemeContext;

  constructor(props: IAccountProps) {
    super(props);
  }

  onThemeChange = (value: boolean) => {
    EventRegister.emit('changeTheme', value ? 'dark' : 'light');
  };

  render() {
    return (
      <View style={AccountStyles(this.context).screen.style.container}>
        <View style={AccountStyles(this.context).screen.style.content}>
          <View style={AccountStyles(this.context).screen.style.imageContainer}>
            <Image style={AccountStyles(this.context).screen.style.image} source={require('../assets/usericon.png')} />
          </View>
          <DataTable>
            <DataTable.Row style={AccountStyles(this.context).screen.style.dividerOff}>
              <DataTable.Cell
                style={AccountStyles(this.context).screen.style.cellCenter}
                textStyle={AccountStyles(this.context).screen.style.text}
              >
                example@email.com
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row style={AccountStyles(this.context).screen.style.dividerOff}>
              <DataTable.Cell style={AccountStyles(this.context).screen.style.cellCenter}>
                <CButton
                  style={AccountStyles(this.context).logOutButton}
                  title='Logout'
                  onPress={async () => {
                    if (auth().currentUser?.providerData[0].providerId === 'google.com')
                      await GoogleSignin.revokeAccess();
                    await auth().signOut();
                    this.props.navigation.navigate('InForms');
                  }}
                />
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </View>
      </View>
    );
  }
}
