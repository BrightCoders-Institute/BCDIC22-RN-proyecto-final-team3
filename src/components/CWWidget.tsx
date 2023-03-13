import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { ICWWidgetProps } from '../types/components/CWWidget';

export default class CWWidget extends Component<ICWWidgetProps> {
  constructor(props: ICWWidgetProps) {
    super(props);
  }

  render() {
    return (
      <View>
        <View style={this.props.style.rowContainer}>
          <Image source={{ uri: this.props.data.icon }} style={this.props.style.image} />
        </View>
        <View style={this.props.style.rowContainer}>
          <Text style={this.props.style.textCity}>{this.props.data.city.name}</Text>
          <FontAwesome
            style={this.props.style.icon.style}
            name={'location-arrow'}
            size={this.props.style.icon.size}
            color={this.props.style.icon.color}
          />
        </View>
        <View style={this.props.style.rowContainer}>
          <Text style={this.props.style.textDegrees}>{this.props.data.degrees.toString()}°</Text>
        </View>
      </View>
    );
  }
}
