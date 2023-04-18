import React from 'react';
import { create, ReactTestRenderer } from 'react-test-renderer';
import { CurrentWeather as OWMACurrentWeather } from 'openweather-api-node';
import CWWind from '../../src/components/CWWind';
import OWMA from '../../src/clients/OWMA';

describe('<CWWind/>', () => {
  let data: OWMACurrentWeather;
  let wind: ReactTestRenderer;
  beforeAll(async () => {
    data = await OWMA.getCurrent({ locationName: 'Colima' });
    jest.useFakeTimers();
    wind = create(<CWWind data={data} />);
  });
  it('it has data', () => {
    expect(wind.getInstance()?.props.data).toBeDefined();
  });
});
