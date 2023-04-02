import React from 'react';
import { create, ReactTestRenderer } from 'react-test-renderer';
import { CurrentWeather as OWMACurrentWeather } from 'openweather-api-node';
import CWInfo from '../../src/components/CWInfo';
import OWMA from '../../src/clients/OWMA';

describe('<CWInfo/>', () => {
  let data: OWMACurrentWeather;
  let info: ReactTestRenderer;
  beforeAll(async () => {
    data = await OWMA.getCurrent({ locationName: 'Colima' });
    info = create(<CWInfo data={data} />);
  });
  it('it has data', () => {
    expect(info.getInstance()?.props.data).toBeDefined();
  });
});
