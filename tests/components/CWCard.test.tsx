import React from 'react';
import { create, ReactTestRenderer } from 'react-test-renderer';
import CWCard from '../../src/components/CWCard';

describe('<CWCard />', () => {
  let card: ReactTestRenderer;
  beforeAll(() => {
    card = create(
      <CWCard
        data={{
          country: 'MX',
          city: 'Tecomán',
          degrees: 35,
          icon: 'https://www.losmundosdenoa.es/wp-content/uploads/2020/06/sol-e1603880900911.png',
        }}
      />
    );
  });
  it('has a city', () => {
    expect(card.getInstance()?.props.data.city).toBe('Tecomán');
  });
  it('has a number', () => {
    expect(card.getInstance()?.props.data.degrees).toBe(35);
  });
  it('has a country', () => {
    expect(card.getInstance()?.props.data.country).toBe('MX');
  });
  it('has a icon', () => {
    expect(card.getInstance()?.props.data.icon).toBe(
      'https://www.losmundosdenoa.es/wp-content/uploads/2020/06/sol-e1603880900911.png'
    );
  });
});
