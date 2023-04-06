import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { ICWCardProps } from '../types/components/CWCard';

export default class CWCard extends Component<ICWCardProps> {
  constructor(props: ICWCardProps) {
    super(props);
  }

  render() {
    return (
      <View style={this.props.style?.container}>
        <View style={this.props.style?.content}>
          <View style={this.props.style?.textBox}>
            <Text style={this.props.style?.title.city}>
              {this.props.data.city} {this.props.data.state ? this.props.data.state + ' ' : ''}
              {this.props.data.country}
            </Text>
            <Text style={this.props.style?.title.degrees}>{Math.trunc(this.props.data.degrees)}° C</Text>
          </View>
          <View style={this.props.style?.iconBox}>
            <Image style={this.props.style?.icon} source={{ uri: this.props.data.icon }} />
          </View>
        </View>
      </View>
    );
  }
}
