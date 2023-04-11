import React from 'react';
import { create, ReactTestRenderer } from 'react-test-renderer';
import CWWidget from '../../src/components/CWWidget';
import OWMA from '../../src/clients/OWMA';

describe('<CWWidget />', () => {
  let data: CWWidget['props']['data'];
  let widget: ReactTestRenderer;
  beforeAll(async () => {
    const weather = await OWMA.getCurrent({ locationName: 'Colima' });
    const location = await OWMA.getLocation({ locationName: 'Colima' });
    if (location && weather) {
      data = {
        icon: weather.weather.icon.raw,
        location: location,
        degrees: weather.weather.temp.cur,
      };
      widget = create(<CWWidget data={data} />);
    }
  });
  it('has a icon', () => {
    expect(widget.getInstance()?.props.data.icon).toBeDefined();
  });
  it('has a location', () => {
    expect(widget.getInstance()?.props.data.location).toBeDefined();
  });
  it('has a degrees', () => {
    expect(widget.getInstance()?.props.data.degrees).toEqual(expect.any(Number));
  });
});
