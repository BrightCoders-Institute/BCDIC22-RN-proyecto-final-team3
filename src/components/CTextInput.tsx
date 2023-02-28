import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TextInput, TextInputProps } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ICTextInputProps, ICTextInputsState } from '../types/components/CTextInput';

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
    if (this.props.label) return this.props.label.charAt(0).toUpperCase() + this.props.label.slice(1);
    if (!this.props.type || this.props.type == 'text') return undefined;
    return this.props.type.charAt(0).toUpperCase() + this.props.type.slice(1);
  };

  render() {
    return (
      <View>
        <TextInput
          activeOutlineColor={this.props.style?.box?.activeOutlineColor}
          error={this.props.error?.active}
          keyboardType={this.props.type ? (keyboardType[this.props.type] as TextInputProps['keyboardType']) : undefined}
          label={this.getLabel()}
          mode={this.props.style?.box?.mode}
          onChangeText={this.props.onChangeText}
          right={
            this.props.type == 'password' ? (
              <TextInput.Icon
                icon={this.state.hidden ? 'eye-off' : 'eye'}
                iconColor={this.props.style?.box?.icon?.iconColor}
                onPress={() => {
                  this.setState({ ...this.state, hidden: !this.state.hidden });
                }}
              />
            ) : undefined
          }
          secureTextEntry={this.props.type == 'password' && this.state.hidden}
          style={this.props.style?.box?.style}
          value={this.props.value}
        />
        <View style={[this.props.style?.error?.view, { opacity: this.props.error?.active ? undefined : 0 }]}>
          {this.props.style?.error?.icon && (
            <MaterialCommunityIcons
              name={this.props.style?.error?.icon?.name}
              style={this.props.style?.error?.icon?.style}
              size={this.props.style?.error?.icon?.size}
              color={this.props.style?.error?.icon?.color}
            />
          )}
          <Text style={this.props.style?.error?.text}>{this.props.error?.message}</Text>
        </View>
      </View>
    );
  }
}
