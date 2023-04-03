import React from 'react';
import { create, ReactTestRenderer } from 'react-test-renderer';
import { ForecastWeather as OWMAForecastWeather } from 'openweather-api-node';
import CWDetails from '../../src/components/CWDetails';
import OWMA from '../../src/clients/OWMA';
describe('<CWDetails />', () => {
  let data: OWMAForecastWeather[];
  let info: ReactTestRenderer;
  beforeAll(async () => {
    data = await OWMA.getForecast(2, { locationName: 'Colima' });
    info = create(<CWDetails data={data} />);
  });
  it('has a Location', () => {
    expect(info.getInstance()?.props.data).toBeDefined();
  });
});
