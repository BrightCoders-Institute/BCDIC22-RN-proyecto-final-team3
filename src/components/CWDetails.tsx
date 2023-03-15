import React, { Component } from 'react';
import { FlatList, Image, View, Text } from 'react-native';
import moment from 'moment';

export default class CWDetails extends Component<any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    console.log(this.props.data);
    return (
      <View
        style={{
          backgroundColor: 'blue',
          borderRadius: 10,
          alignItems: 'center',
          padding: 10,
        }}
      >
        <View style={{ marginVertical: 5 }}>
          <Text>FORECAST</Text>
        </View>
        <FlatList
          horizontal
          style={{ backgroundColor: 'red' }}
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-evenly' }}
          data={this.props.data}
          renderItem={({ item }) => (
            <View>
              <Text style={{ textAlign: 'center', marginVertical: 5 }}>{moment(item.dt).format('ddd')}</Text>
              <Image style={{ height: 60, marginVertical: 5 }} source={{ uri: item.weather.icon.url }} />
              <Text style={{ textAlign: 'center', marginVertical: 5 }}>{item.weather.temp.cur}°</Text>
              <Text style={{ textAlign: 'center', marginVertical: 5 }}>{moment(item.dt).format('HH:mm')}</Text>
            </View>
          )}
        ></FlatList>
      </View>
    );
  }
}
