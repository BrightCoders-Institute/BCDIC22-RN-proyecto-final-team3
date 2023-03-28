import React, { Component } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { Location as OWMALocation } from 'openweather-api-node';
import OWMA from '../clients/OWMA';
import CWCard from '../components/CWCard';
import ThemeContext from '../theme/context';
import SearchStyles from '../styles/screens/Search';
import { ISearchProps, ISearchState } from '../types/screens/Search';
import { IThemeContext } from '../types/theme/context';

export default class Search extends Component<ISearchProps, ISearchState> {
  static contextType = ThemeContext;
  declare context: IThemeContext;

  constructor(props: ISearchProps) {
    super(props);
    this.state = {
      search: this.props.route.params.search,
      locations: [],
      events: {
        focus: this.props.navigation.addListener('focus', async () => {
          this.props.navigation.setOptions({
            headerSearchBarOptions: {
              placeholder: 'Search',
              hideWhenScrolling: true,
              shouldShowHintSearchIcon: false,
              headerIconColor: this.context.colors.text,
              textColor: this.context.colors.text,
              tintColor: this.context.colors.text,
              hintTextColor: this.context.colors.text,
              onSearchButtonPress: async (e) => {
                await this.setState({ search: e.nativeEvent.text });
                await this.getLocationAndConditions();
              },
            },
          });
        }),
      },
    };
  }

  getLocations = async (query: string) => {
    return await OWMA.getAllLocations(query);
  };

  getConditions = async (locations: OWMALocation[]) => {
    const locationsAndConditions: typeof this.state.locations = [];
    for (const location of locations) {
      locationsAndConditions.push({
        ...location,
        conditions: await OWMA.getCurrent({
          coordinates: { lat: location.lat, lon: location.lon },
        }),
      });
    }
    return locationsAndConditions;
  };

  getLocationAndConditions = async () => {
    const locations = await this.getLocations(this.state.search);
    const locationsAndConditions = await this.getConditions(locations);
    this.setState({ locations: locationsAndConditions });
  };

  async componentDidMount() {
    await this.getLocationAndConditions();
    this.props.navigation.setOptions({
      headerSearchBarOptions: {
        placeholder: 'Search',
        hideWhenScrolling: true,
        shouldShowHintSearchIcon: false,
        headerIconColor: this.context.colors.text,
        textColor: this.context.colors.text,
        tintColor: this.context.colors.text,
        hintTextColor: this.context.colors.text,
        onSearchButtonPress: async (e) => {
          await this.setState({ search: e.nativeEvent.text });
          await this.getLocationAndConditions();
        },
      },
    });
  }

  render() {
    return (
      <View style={SearchStyles(this.context).screen.style.container}>
        <FlatList
          style={SearchStyles(this.context).screen.style.content}
          data={this.state.locations}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={SearchStyles(this.context).screen.style.cardBox}
              onPress={() => {
                this.props.navigation.navigate('Details', { location: JSON.stringify(item) });
              }}
            >
              <CWCard
                style={SearchStyles(this.context).weatherCard}
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
