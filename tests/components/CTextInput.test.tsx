import React from 'react';
import { create, ReactTestRenderer } from 'react-test-renderer';
import CTextInput from '../../src/components/CTextInput';

describe('<CTextInput />', () => {
  let textInput: ReactTestRenderer;
  let textInputLabeled: ReactTestRenderer;
  let textInputPassword: ReactTestRenderer;

  describe('Labeled', () => {
    beforeAll(() => {
      global.setImmediate = jest.useRealTimers as unknown as typeof setImmediate;
      textInputLabeled = create(
        <CTextInput error={{ active: true, message: 'name not valid' }} label='name' type='text' value='Elias' />
      );
    });
    it('has a value label', () => {
      expect(textInputLabeled.getInstance()?.props.label).toBe('name');
    });
    it('has a type of input', () => {
      expect(textInputLabeled.getInstance()?.props.type).toBe('text');
    });
    it('has a value property', () => {
      expect(textInputLabeled.getInstance()?.props.value).toBe('Elias');
    });
    it('has a value error', () => {
      expect(textInputLabeled.getInstance()?.props.error.activate).not.toBeTruthy();
      expect(textInputLabeled.getInstance()?.props.error.message).toBe('name not valid');
    });
  });
  describe('Email', () => {
    beforeAll(() => {
      global.setImmediate = jest.useRealTimers as unknown as typeof setImmediate;
      textInputPassword = create(
        <CTextInput
          error={{ active: false, message: 'email is not valid' }}
          label='Email'
          type='email'
          value='email@email.com'
        />
      );
    });
    it('has a value label', () => {
      expect(textInputPassword.getInstance()?.props.label).toBe('Email');
    });
    it('has a type of input', () => {
      expect(textInputPassword.getInstance()?.props.type).toBe('email');
    });
    it('has a value property', () => {
      expect(textInputPassword.getInstance()?.props.value).toBe('email@email.com');
    });
    it('has a value error', () => {
      expect(textInputPassword.getInstance()?.props.error.activate).not.toBeTruthy();
      expect(textInputPassword.getInstance()?.props.error.message).toBe('email is not valid');
    });
  });
  describe('Password', () => {
    beforeAll(() => {
      jest.useFakeTimers();
      global.setImmediate = jest.useRealTimers as unknown as typeof setImmediate;
      textInput = create(<CTextInput type={'password'} />);
    });
    it('do not has a label', () => {
      expect(textInput.getInstance()?.props.label).toBeUndefined();
    });
    it('do not has a type input', () => {
      expect(textInput.getInstance()?.props.type).toBeDefined();
    });
    it('do not has a value property', () => {
      expect(textInput.getInstance()?.props.value).toBeUndefined();
    });
    it('do not has a value error', () => {
      expect(textInput.getInstance()?.props.error?.activate).toBeUndefined();
    });
  });
});
