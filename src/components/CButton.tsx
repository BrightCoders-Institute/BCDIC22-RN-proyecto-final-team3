import React, { Component } from 'react';
import { Button } from 'react-native-paper';
import { ICButtonProps } from '../types/components/CButton';

export default class CButton extends Component<ICButtonProps> {
  constructor(props: ICButtonProps) {
    super(props);
  }

  render() {
    return (
      <Button
        buttonColor={this.props.style?.buttonColor}
        contentStyle={this.props.style?.contentStyle}
        disabled={this.props.disabled}
        mode={this.props.style?.mode}
        onPress={this.props.onPress}
        textColor={this.props.style?.textColor}
        style={this.props.style?.buttonStyle}
        uppercase={this.props.style?.uppercase}
        icon={this.props.style?.icon}
      >
        {this.props.title}
      </Button>
    );
  }
}
