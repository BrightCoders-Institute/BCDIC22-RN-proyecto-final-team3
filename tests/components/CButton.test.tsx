import React from 'react';
import { act, create, ReactTestRenderer } from 'react-test-renderer';
import CButton from '../../src/components/CButton';

describe('<CButton />', () => {
  let button: ReactTestRenderer;
  beforeAll(() => {
    button = create(
      <CButton
        title={'Press'}
        onPress={() => {
          return true;
        }}
      />
    );
  });
  it('has a title', () => {
    expect(button.getInstance()?.props.title).toBe('Press');
  });
  it('has a disabled property', () => {
    expect(button.getInstance()?.props.disabled).toBeFalsy();
  });
  it('has a loading property', () => {
    expect(button.getInstance()?.props.loading).toBeFalsy();
  });
  it('has a working onPress function', () => {
    act(() => {
      expect(button.getInstance()?.props.onPress()).toBeDefined();
    });
  });
});
