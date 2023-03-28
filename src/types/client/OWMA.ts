import { Location as OWMALocation, CurrentWeather as OWMACurrentWeather } from 'openweather-api-node';

export type OWMALocationAndWeather = OWMALocation & { conditions: OWMACurrentWeather };
