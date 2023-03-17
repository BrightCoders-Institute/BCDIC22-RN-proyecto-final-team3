import React, { Component } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import CWCard from '../components/CWCard';
import ThemeContext from '../theme/context';
import FollowingStyles from '../styles/screens/Following';
import { IFollowingProps, IFollowingState } from '../types/screens/Following';
import { IThemeContext } from '../types/theme/context';

export default class LogIn extends Component<IFollowingProps, IFollowingState> {
  static contextType = ThemeContext;
  declare context: IThemeContext;

  constructor(props: IFollowingProps) {
    super(props);
    this.state = {
      search: '',
    };
  }

  componentDidMount() {
    this.props.navigation.setOptions({
      headerSearchBarOptions: {
        placeholder: 'Search',
        onSearchButtonPress: (e) => {
          this.setState({ search: e.nativeEvent.text });
        },
      },
    });
  }

  render() {
    return (
      <View style={FollowingStyles(this.context).screen.style.container}>
        <FlatList
          style={FollowingStyles(this.context).screen.style.content}
          data={new Array(10)}
          renderItem={() => (
            <TouchableOpacity
              style={{ marginVertical: 5, marginHorizontal: 20 }}
              onPress={() => {
                this.props.navigation.navigate('Details');
              }}
            >
              <CWCard
                style={FollowingStyles(this.context).weatherCard}
                data={{
                  city: 'Colima',
                  degrees: 80,
                  icon: 'https://www.losmundosdenoa.es/wp-content/uploads/2020/06/sol-e1603880900911.png',
                }}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}
