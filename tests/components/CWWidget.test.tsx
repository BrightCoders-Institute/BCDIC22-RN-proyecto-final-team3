import React from 'react';
import { act, create, ReactTestRenderer } from 'react-test-renderer';
import CWWidget from '../../src/components/CWWidget';
import { Location } from 'openweather-api-node';

describe('<CWWidget />', () => {
  jest.useFakeTimers();
  global.setImmediate = jest.useRealTimers as unknown as typeof setImmediate;

  const loc: Location = { name: 'colima', local_names: '', lat: 123, lon: 23, country: 'mexico', state: 'test' };
  let widget: ReactTestRenderer;
  beforeAll(() => {
    widget = create(
      <CWWidget
        data={{
          icon: 'https://i.pinimg.com/originals/28/86/83/28868304bab40f1dd46788e3d1a5f7fc.png',
          city: loc,
          degrees: 2,
        }}
      />
    );
  });

  it('has a icon', () => {
    expect(widget.getInstance()?.props.data.icon).toBe(
      'https://i.pinimg.com/originals/28/86/83/28868304bab40f1dd46788e3d1a5f7fc.png'
    );
  });
  it('has a degrees', () => {
    expect(widget.getInstance()?.props.data.degrees).toBe(2);
  });
});
