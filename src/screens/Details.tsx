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
      conditions: undefined
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
    this.setState({
      location: await OWMA.getLocation({
        coordinates: {
          lat: 19.24997,
          lon: -103.72714,
        },
      })
    });
    if (this.state.location) {
      this.setState({
        location: await OWMA.getLocation({
          coordinates: {
            lat: 19.24997,
            lon: -103.72714,
          },
        })
      });
      this.setState({
        conditions: {
          current: await OWMA.getCurrent({
            coordinates: {
              lat: 19.24997,
              lon: -103.72714,
            },
          }),
          forecast: await OWMA.getForecast(10, {
            coordinates: {
              lat: 19.24997,
              lon: -103.72714,
            },
          })
        }
      });
    }
  };

  async componentDidMount() {
    this.setUpAddButton(this.state.following);
    await this.getData();
  }

  render() {
    if (this.state.conditions && this.state.location) {
      return (
        <ScrollView style={DetailsStyles(this.context).screen.style.container}>
          <View style={DetailsStyles(this.context).screen.style.content}>
            <CWWidget
              style={DetailsStyles(this.context).weatherWidget}
              data={{
                city: this.state.location,
                degrees: this.state.conditions.current.weather.temp.cur,
                icon: this.state.conditions.current.weather.icon.url,
              }}
            />
            <View style={DetailsStyles(this.context).screen.style.contendInfo}>
              <CWInfo data={this.state.conditions.current} style={DetailsStyles(this.context).weatherInfo} />
            </View>
            <View>
              <CWDetails data={this.state.conditions.forecast} style={DetailsStyles(this.context).weatherDetails} />
            </View>
          </View>
        </ScrollView>
      );
    }









    
  }
}
