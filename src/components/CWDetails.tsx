import React, { Component } from 'react';
import { FlatList, Image, View, Text } from 'react-native';
import moment from 'moment';
import { ICWDetailsProps } from '../types/components/CWDetails';
import icons from '../constants/icons';

export default class CWDetails extends Component<ICWDetailsProps> {
  constructor(props: ICWDetailsProps) {
    super(props);
  }

  render() {
    return (
      <View style={this.props.style?.container}>
        <View style={this.props.style?.title.box}>
          <Text style={this.props.style?.title.text}>FORECAST</Text>
        </View>
        <FlatList
          horizontal
          style={this.props.style?.content.style}
          contentContainerStyle={this.props.style?.content.contentContainerStyle}
          data={this.props.data}
          renderItem={({ item }) => (
            <View style={this.props.style?.item.box}>
              <Text style={this.props.style?.item.day}>{moment(item.dt).format('ddd')}</Text>
              <Image style={this.props.style?.item.icon} source={icons[item.weather.icon.raw as keyof typeof icons]} />
              <Text style={this.props.style?.item.degrees}>{Math.trunc(item.weather.temp.cur)}° C</Text>
              <Text style={this.props.style?.item.time}>{moment(item.dt).format('HH:mm')}</Text>
            </View>
          )}
        ></FlatList>
      </View>
    );
  }
}
