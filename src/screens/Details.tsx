import React, { Component } from 'react';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import OWMA from '../clients/OWMA';
import CButton from '../components/CButton';
import CWWidget from '../components/CWWidget';
import CWInfo from '../components/CWInfo';
import CWWind from '../components/CWWind';
import CWDetails from '../components/CWDetails';
import DetailsStyles from '../styles/screens/Details';
import ThemeContext from '../theme/context';
import { IDetailsProps, IDetailsState } from '../types/screens/Details';
import { IThemeContext } from '../types/theme/context';

export default class Details extends Component<IDetailsProps, IDetailsState> {
  static contextType = ThemeContext;
  declare context: IThemeContext;

  constructor(props: IDetailsProps) {
    super(props);
    this.state = {
      following: false,
      location: undefined,
    };
  }

  followLocation = async () => {
    await firestore()
      .collection('users')
      .doc(auth().currentUser?.uid)
      .collection('following')
      .add({
        country: this.state.location?.country,
        lat: this.state.location?.lat,
        lon: this.state.location?.lon,
        name: this.state.location?.name,
        state: this.state.location?.state || '',
      });
  };

  unfollowLocation = async () => {
    const querySnapshot = await firestore()
      .collection('users')
      .doc(auth().currentUser?.uid)
      .collection('following')
      .where('country', '==', this.state.location?.country)
      .where('lat', '==', this.state.location?.lat)
      .where('lon', '==', this.state.location?.lon)
      .where('name', '==', this.state.location?.name)
      .where('state', '==', this.state.location?.state || '')
      .get();
    for (const doc of querySnapshot.docs) {
      doc.ref.delete();
    }
  };

  checkFollowing = async () => {
    const querySnapshot = await firestore()
      .collection('users')
      .doc(auth().currentUser?.uid)
      .collection('following')
      .where('country', '==', this.state.location?.country)
      .where('lat', '==', this.state.location?.lat)
      .where('lon', '==', this.state.location?.lon)
      .where('name', '==', this.state.location?.name)
      .where('state', '==', this.state.location?.state || '')
      .get();
    this.setState({ following: querySnapshot.docs.length > 0 });
  };

  setUpAddButton = (active?: boolean) => {
    this.props.navigation.setOptions({
      headerRight: () => (
        <CButton
          loading={this.state.location?.conditions && this.state.location.forecast ? false : true}
          disabled={this.state.location?.conditions && this.state.location.forecast ? false : true}
          onPress={async () => {
            this.setState({ following: !active });
            this.setUpAddButton(!active);
            active ? await this.unfollowLocation() : await this.followLocation();
          }}
          title={active ? 'Following' : 'Follow'}
          style={active ? DetailsStyles(this.context).addedButton : DetailsStyles(this.context).notAddedButton}
        />
      ),
    });
  };

  getLocationConditions = async () => {
    const location: typeof this.state.location = JSON.parse(this.props.route.params.location);
    if (location) {
      this.setState({
        location: {
          ...location,
          forecast: await OWMA.getForecast(10, {
            coordinates: {
              lat: location.lat,
              lon: location.lon,
            },
          }),
        },
      });
    }
  };

  async componentDidMount() {
    this.setUpAddButton(this.state.following);
    await this.getLocationConditions();
    await this.checkFollowing();
    this.setUpAddButton(this.state.following);
  }

  render() {
    if (this.state.location?.conditions && this.state.location?.forecast) {
      return (
        <ScrollView style={DetailsStyles(this.context).screen.style.container}>
          <View style={DetailsStyles(this.context).screen.style.content}>
            <View style={DetailsStyles(this.context).screen.style.contendInfo}>
              <CWWidget
                style={DetailsStyles(this.context).weatherWidget}
                data={{
                  location: this.state.location,
                  degrees: this.state.location.conditions.weather.temp.cur,
                  icon: this.state.location.conditions.weather.icon.raw,
                }}
              />
            </View>
            <View style={DetailsStyles(this.context).screen.style.contendInfo}>
              <CWInfo data={this.state.location.conditions} style={DetailsStyles(this.context).weatherInfo} />
            </View>
            <View style={DetailsStyles(this.context).screen.style.contendInfo}>
              <CWWind data={this.state.location.conditions} style={DetailsStyles(this.context).weatherWind} />
            </View>
            <View style={DetailsStyles(this.context).screen.style.contendInfo}>
              <CWDetails data={this.state.location.forecast} style={DetailsStyles(this.context).weatherDetails} />
            </View>
          </View>
        </ScrollView>
      );
    } else {
      return (
        <View style={DetailsStyles(this.context).screen.style.loadingBox}>
          <ActivityIndicator size={'large'} color={this.context.colors.loading} />
        </View>
      );
    }
  }
}
