import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class CWInfo extends Component<any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          width: '100%',
          height: 60,
          borderRadius: 15,
          backgroundColor: '#AFDCF8',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingTop: 7,
        }}
      >
        <View style={{}}>
          <Text style={{ textAlign: 'center', marginBottom: 5 }}>TIME</Text>
          <Text style={{ textAlign: 'center' }}>{this.props.data.weather.main}</Text>
        </View>
        <View>
          <Text style={{ textAlign: 'center', marginBottom: 5 }}>HUMIDITY</Text>
          <Text style={{ textAlign: 'center' }}>{this.props.data.weather.humidity}</Text>
        </View>
        <View>
          <Text style={{ textAlign: 'center', marginBottom: 5 }}>RAIN</Text>
          <Text style={{ textAlign: 'center' }}>{this.props.data.weather.rain}%</Text>
        </View>
        <View>
          <Text style={{ textAlign: 'center', marginBottom: 5 }}>PRESSURE</Text>
          <Text style={{ textAlign: 'center' }}>{this.props.data.weather.pressure}</Text>
        </View>
      </View>
    );
  }
}
