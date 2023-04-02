import React from 'react';
import { act, create, ReactTestRenderer } from 'react-test-renderer';
import CButtonIcon from '../../src/components/CButtonIcon';

describe('<CButtonIcon />', () => {
  jest.useFakeTimers();
  let buttonIcon: ReactTestRenderer;
  beforeAll(() => {
    buttonIcon = create(
      <CButtonIcon
        name='link'
        disabled={false}
        onPress={() => {
          return true;
        }}
      />
    );
  });
  it('has a name', () => {
    expect(buttonIcon.getInstance()?.props.name).toBe('link');
  });
  it('has a disabled property', () => {
    expect(buttonIcon.getInstance()?.props.disabled).toBeFalsy();
  });
  it('has a working onPress function', () => {
    act(() => {
      expect(buttonIcon.getInstance()?.props.onPress()).toBeDefined();
    });
  });
});
