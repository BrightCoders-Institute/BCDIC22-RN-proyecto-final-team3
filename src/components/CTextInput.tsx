import React, { Component } from 'react';
import { TextInput, TextInputProps } from 'react-native-paper';
import { ICTextInputProps, ICTextInputsState } from '../types/CTextInput';

const keyboardType = {
  email: 'email-address',
  password: 'password',
  text: 'default',
};

export default class CTextInput extends Component<ICTextInputProps, ICTextInputsState> {
  constructor(props: ICTextInputProps) {
    super(props);
    this.state = {
      hidden: true,
    };
  }

  getLabel = () => {
    if (this.props.label) return this.props.label;
    if (!this.props.type || this.props.type == 'text') return undefined;
    return this.props.type.charAt(0).toUpperCase() + this.props.type.slice(1);
  };

  render() {
    return (
      <TextInput
        label={this.getLabel()}
        mode={'outlined'}
        value={this.props.value}
        error={this.props.error}
        onChangeText={this.props.onChangeText}
        secureTextEntry={this.props.type == 'password' && this.state.hidden}
        right={
          this.props.type == 'password' ? (
            <TextInput.Icon
              icon={this.state.hidden ? 'eye-off' : 'eye'}
              onPress={() => {
                this.setState({ ...this.state, hidden: !this.state.hidden });
              }}
            />
          ) : undefined
        }
        keyboardType={this.props.type ? (keyboardType[this.props.type] as TextInputProps['keyboardType']) : undefined}
      />
    );
  }
}
