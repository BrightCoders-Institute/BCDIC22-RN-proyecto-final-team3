import React, { Component } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import CWCard from '../components/CWCard';
import ThemeContext from '../theme/context';
import FollowingStyles from '../styles/screens/Following';
import { OWMALocationAndWeather } from '../types/client/OWMA';
import { IFollowingProps, IFollowingState } from '../types/screens/Following';
import { IThemeContext } from '../types/theme/context';
import OWMA from '../clients/OWMA';

export default class LogIn extends Component<IFollowingProps, IFollowingState> {
  static contextType = ThemeContext;
  declare context: IThemeContext;

  constructor(props: IFollowingProps) {
    super(props);
    this.state = {
      search: '',
      following: [],
    };
  }

  getFollowings = async () => {
    const subscribe = firestore()
      .collection('users')
      .doc(auth().currentUser?.uid)
      .collection('following')
      .onSnapshot(async (querySnapshot) => {
        const locations: OWMALocationAndWeather[] = [];
        for (const doc of querySnapshot.docs) {
          const conditions = await OWMA.getCurrent({ coordinates: { lat: doc.data().lat, lon: doc.data().lon } });
          const location = await OWMA.getLocation({ coordinates: { lat: doc.data().lat, lon: doc.data().lon } });
          if (conditions && location) {
            locations.push({ ...location, conditions });
          }
        }
        this.setState({ following: locations });
      });
    return () => subscribe();
  };

  async componentDidMount() {
    await this.getFollowings();
  }

  render() {
    return (
      <View style={FollowingStyles(this.context).screen.style.container}>
        <FlatList
          style={FollowingStyles(this.context).screen.style.content}
          data={this.state.following}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={FollowingStyles(this.context).screen.style.cardBox}
              onPress={() => {
                this.props.navigation.navigate('Details', { location: JSON.stringify(item) });
              }}
            >
              <CWCard
                style={FollowingStyles(this.context).weatherCard}
                data={{
                  city: item.name,
                  state: item.state,
                  country: item.country,
                  degrees: item.conditions.weather.temp.cur,
                  icon: item.conditions.weather.icon.url,
                }}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}
