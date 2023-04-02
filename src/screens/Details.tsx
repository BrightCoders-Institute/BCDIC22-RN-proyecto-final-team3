import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import OWMA from '../clients/OWMA';
import CButton from '../components/CButton';
import CWWidget from '../components/CWWidget';
import CWInfo from '../components/CWInfo';
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

  setUpAddButton = (active?: boolean) => {
    this.props.navigation.setOptions({
      headerRight: () => (
        <CButton
          onPress={() => {
            this.setState({ following: !active });
            this.setUpAddButton(!active);
          }}
          title={active ? 'Following' : 'Follow'}
          style={active ? DetailsStyles(this.context).addedButton : DetailsStyles(this.context).notAddedButton}
        />
      ),
    });
  };

  getData = async () => {
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
    await this.getData();
  }

  render() {
    if (this.state.location?.conditions && this.state.location?.forecast) {
      return (
        <ScrollView style={DetailsStyles(this.context).screen.style.container}>
          <View style={DetailsStyles(this.context).screen.style.content}>
            <CWWidget
              style={DetailsStyles(this.context).weatherWidget}
              data={{
                location: this.state.location,
                degrees: this.state.location.conditions.weather.temp.cur,
                icon: this.state.location.conditions.weather.icon.url,
              }}
            />
            <View style={DetailsStyles(this.context).screen.style.contendInfo}>
              <CWInfo data={this.state.location.conditions} style={DetailsStyles(this.context).weatherInfo} />
            </View>
            <View>
              <CWDetails data={this.state.location.forecast} style={DetailsStyles(this.context).weatherDetails} />
            </View>
          </View>
        </ScrollView>
      );
    }
  }
}
