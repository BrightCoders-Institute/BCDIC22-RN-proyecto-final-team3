import OpenWeatherMapAPI from 'openweather-api-node';
import Constants from 'expo-constants';

export default new OpenWeatherMapAPI({
  key: Constants.expoConfig?.extra?.openWeatherMapAPIKey,
});
