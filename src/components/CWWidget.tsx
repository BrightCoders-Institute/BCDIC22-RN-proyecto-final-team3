import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { ICWWidgetProps } from '../types/components/CWWidget';

export default class CWWidget extends Component<ICWWidgetProps> {
  constructor(props: ICWWidgetProps) {
    super(props);
  }

  render() {
    return (
      <View style={this.props.style?.container}>
        <View style={this.props.style?.rowContainer}>
          <Image source={{ uri: this.props.data.icon }} style={this.props.style?.image} />
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
