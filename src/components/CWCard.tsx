import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { ICWCardProps } from '../types/components/CWCard';

export default class CWCard extends Component<ICWCardProps> {
  constructor(props: ICWCardProps) {
    super(props);
  }

  render() {
    return (
      <View style={this.props.style.container}>
        <View style={this.props.style.content}>
          <View style={{ alignContent: 'center', flexShrink: 1, width: '70%' }}>
            <Text style={this.props.style.title.city}>
              {this.props.data.city} {this.props.data.state ? this.props.data.state + ' ' : ''}
              {this.props.data.country}
            </Text>
            <Text style={this.props.style.title.degrees}>{this.props.data.degrees?.toString()}°</Text>
          </View>
          <View style={{ alignContent: 'center', width: '30%' }}>
            <Image style={this.props.style.icon} source={{ uri: this.props.data.icon }} />
          </View>
        </View>
      </View>
    );
  }
}
