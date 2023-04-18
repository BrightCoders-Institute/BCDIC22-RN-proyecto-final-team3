import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Svg, { Circle, G, Text as SVGText, Polygon } from 'react-native-svg';
import { ICWInfoProps } from '../types/components/CWInfo';

export default class CWWind extends Component<ICWInfoProps> {
  constructor(props: ICWInfoProps) {
    super(props);
  }

  toTextualDescription(degree: number) {
    if (degree > 337.5) return 'Northerly';
    if (degree > 292.5) return 'North Westerly';
    if (degree > 247.5) return 'Westerly';
    if (degree > 202.5) return 'South Westerly';
    if (degree > 157.5) return 'Southerly';
    if (degree > 122.5) return 'South Easterly';
    if (degree > 67.5) return 'Easterly';
    if (degree > 22.5) {
      return 'North Easterly';
    }
    return 'Northerly';
  }

  render() {
    return (
      <View
        style={{
          borderRadius: 8,
          backgroundColor: '#AFDCF8',
          paddingVertical: 10,
        }}
      >
        <View style={{ marginVertical: 5 }}>
          <Text style={{ textAlign: 'center' }}>WIND STATE</Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}
          >
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Svg height='65' width='100' viewBox='0 0 508 508'>
                <G>
                  <Circle cx='254' cy='254' r='254' fill='#324A5E' />
                  <Circle cx='254' cy='254' r='193.2' fill='#84DBFF' />
                  <Circle cx='254' cy='254' r='166.4' fill='#FFFFFF' />
                  <SVGText x='254' y='170' textAnchor='middle' fill='red' fontSize='60' fontWeight='bold'>
                    N
                  </SVGText>
                  <SVGText x='350' y='270' textAnchor='middle' fill='red' fontSize='60' fontWeight='bold'>
                    E
                  </SVGText>
                  <SVGText x='254' y='380' textAnchor='middle' fill='red' fontSize='60' fontWeight='bold'>
                    S
                  </SVGText>
                  <SVGText x='150' y='270' textAnchor='middle' fill='red' fontSize='60' fontWeight='bold'>
                    W
                  </SVGText>
                </G>
                <G transform={`rotate(${-45 + this.props.data.weather.wind.deg}, 254, 254)`}>
                  <Polygon points='341.2,166.8 227.2,227.2 280.8,280.8' fill='#FF7058' />
                  <Polygon points='166.8,341.2 280.8,280.8 227.2,227.2' fill='#324A5E' />
                  <Circle cx='254' cy='254' r='21.2' fill='#FFD05B' />
                </G>
              </Svg>
              <View style={{ marginTop: 5 }}>
                <Text> {this.toTextualDescription(this.props.data.weather.wind.deg)}</Text>
              </View>
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <MaterialCommunityIcons name='tailwind' size={60} color='black' />
              <View style={{ marginTop: 8 }}>
                <Text>{this.props.data.weather.wind.speed} KM/H</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
