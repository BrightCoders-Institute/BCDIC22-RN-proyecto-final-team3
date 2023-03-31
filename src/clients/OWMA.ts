import OpenWeatherMapAPI from 'openweather-api-node';
import Constants from 'expo-constants';

console.log(process.env.OPEN_WEATHER_MAP_API_KEY);

const OWMA = new OpenWeatherMapAPI({
  units: 'metric',
});

if (Constants.expoConfig?.extra?.openWeatherMapAPIKey) {
  OWMA.setKey(Constants.expoConfig?.extra?.openWeatherMapAPIKey);
} else if (Constants.manifest?.extra?.openWeatherMapAPIKey) {
  OWMA.setKey(Constants.manifest?.extra?.openWeatherMapAPIKey);
} else if (process.env.OPEN_WEATHER_MAP_API_KEY) {
  const key = process.env.OPEN_WEATHER_MAP_API_KEY;
  if (key) OWMA.setKey(key);
}

export default OWMA;
