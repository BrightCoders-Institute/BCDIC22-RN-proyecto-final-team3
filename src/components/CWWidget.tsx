import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { ICWWidgetProps } from '../types/components/CWWidget';

export default class CWWidget extends Component<ICWWidgetProps> {
  constructor(props: ICWWidgetProps) {
    super(props);
  }

  render() {
    return (
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Image source={{ uri: this.props.data.icon }} style={{ width: 200, height: 200 }} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 40, marginHorizontal: 5 }}>{this.props.data.city}</Text>
          <FontAwesome style={{ marginHorizontal: 5 }} name={'location-arrow'} size={24} color='black' />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 50, fontWeight: '500' }}>{this.props.data.degrees}°</Text>
        </View>
      </View>
    );
  }
}
