import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ICWInfoProps } from '../types/components/CWInfo';

export default class CWInfo extends Component<ICWInfoProps> {
  constructor(props: ICWInfoProps) {
    super(props);
  }

  render() {
    return (
      <View style={this.props.style?.container}>
        <View>
          <Text style={this.props.style?.textCenterSpace}>TIME</Text>
          <Text style={this.props.style?.textCenter}>{this.props.data.weather.main}</Text>
        </View>
        <View>
          <Text style={this.props.style?.textCenterSpace}>HUMIDITY</Text>
          <Text style={this.props.style?.textCenter}>{this.props.data.weather.humidity}%</Text>
        </View>
        <View>
          <Text style={this.props.style?.textCenterSpace}>RAIN</Text>
          <Text style={this.props.style?.textCenter}>{this.props.data.weather.rain}%</Text>
        </View>
        <View>
          <Text style={this.props.style?.textCenterSpace}>PRESSURE</Text>
          <Text style={this.props.style?.textCenter}>{this.props.data.weather.pressure}</Text>
        </View>
      </View>
    );
  }
}
