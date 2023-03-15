import React, { Component } from 'react';
import { FlatList, Image, View, Text } from 'react-native';
import moment from 'moment';
import { ICWDetailsProps } from '../types/components/CWDetails';

export default class CWDetails extends Component<ICWDetailsProps> {
  constructor(props: ICWDetailsProps) {
    super(props);
  }

  render() {
    return (
      <View style={this.props.style.container}>
        <View style={this.props.style.title.box}>
          <Text style={this.props.style.title.text}>FORECAST</Text>
        </View>
        <FlatList
          horizontal
          style={this.props.style.content.style}
          contentContainerStyle={this.props.style.content.contentContainerStyle}
          data={this.props.data}
          renderItem={({ item }) => (
            <View>
              <Text style={this.props.style.item.day}>{moment(item.dt).format('ddd')}</Text>
              <Image style={this.props.style.item.icon} source={{ uri: item.weather.icon.url }} />
              <Text style={this.props.style.item.degrees}>{item.weather.temp.cur}°</Text>
              <Text style={this.props.style.item.time}>{moment(item.dt).format('HH:mm')}</Text>
            </View>
          )}
        ></FlatList>
      </View>
    );
  }
}
