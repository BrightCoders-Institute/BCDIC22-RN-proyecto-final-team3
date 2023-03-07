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
        loading={this.props.loading}
        buttonColor={this.props.style?.buttonColor}
        contentStyle={this.props.style?.contentStyle}
        mode={this.props.style?.mode}
        onPress={!this.props.disabled && this.props.onPress ? this.props.onPress : undefined}
        textColor={this.props.style?.textColor}
        style={[this.props.style?.buttonStyle, { opacity: this.props.disabled ? 0.5 : undefined }]}
        uppercase={this.props.style?.uppercase}
        icon={this.props.style?.icon}
      >
        {this.props.title}
      </Button>
    );
  }
}
