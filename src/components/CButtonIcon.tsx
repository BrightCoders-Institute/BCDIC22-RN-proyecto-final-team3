import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { ICButtonIcon } from '../types/components/CButtonIcon';

export default class CButtonIcon extends Component<ICButtonIcon> {
  constructor(props: ICButtonIcon) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        style={[this.props.style?.box?.style, { opacity: this.props.disabled ? 0.5 : undefined }]}
        onPress={!this.props.disabled && this.props.onPress ? this.props.onPress : undefined}
      >
        <FontAwesome
          name={this.props.name}
          color={this.props.style?.icon?.color}
          size={this.props.style?.icon?.size}
          style={this.props.style?.icon?.style}
        />
      </TouchableOpacity>
    );
  }
}
