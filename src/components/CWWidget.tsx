import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { ICWWidgetProps } from '../types/components/CWWidget';
import icons from '../constants/icons';

export default class CWWidget extends Component<ICWWidgetProps> {
  constructor(props: ICWWidgetProps) {
    super(props);
  }

  render() {
    return (
      <View style={this.props.style?.container}>
        <View style={this.props.style?.rowContainer}>
          <Image source={icons[this.props.data.icon as keyof typeof icons]} style={this.props.style?.image} />
        </View>
        <View style={this.props.style?.rowContainer}>
          <Text style={this.props.style?.textCity}>
            {this.props.data.location.name} {this.props.data.location.state ? this.props.data.location.state + ' ' : ''}
            {this.props.data.location.country}
          </Text>
        </View>
        <View style={this.props.style?.rowContainer}>
          <Text style={this.props.style?.textDegrees}>{Math.trunc(this.props.data.degrees)}° C</Text>
        </View>
      </View>
    );
  }
}
