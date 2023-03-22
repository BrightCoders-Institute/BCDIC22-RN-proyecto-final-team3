import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import CButton from '../components/CButton';
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
          title={'Follow'}
          style={active ? DetailsStyles(this.context).addedButton : DetailsStyles(this.context).notAddedButton}
        />
      ),
    });
  };

  componentDidMount() {
    this.setUpAddButton(this.state.following);
  }

  render() {
    return (
      <ScrollView style={DetailsStyles(this.context).screen.style.container}>
        <View style={DetailsStyles(this.context).screen.style.content}></View>
      </ScrollView>
    );
  }
}
