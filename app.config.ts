import dotenv from 'dotenv';
import { ExpoConfig, ConfigContext } from 'expo/config';

dotenv.config();

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'WWU',
  slug: 'WWU',
  scheme: 'wwu',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './src/assets/icon.png',
  userInterfaceStyle: 'automatic',
  splash: {
    image: './src/assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#FFFFFF',
  },
  updates: {
    fallbackToCacheTimeout: 0,
    url: 'https://u.expo.dev/1282976c-5e9c-4089-bff5-c456a6d34b49',
  },
  runtimeVersion: {
    policy: 'sdkVersion',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    // googleServicesFile: './GoogleService-Info.plist',
    userInterfaceStyle: 'automatic',
    supportsTablet: true,
    splash: {
      image: './src/assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#FFFFFF',
      dark: {
        image: './src/assets/splash.png',
        resizeMode: 'contain',
        backgroundColor: '#121212',
      },
    },
    // bundleIdentifier: 'com.brightcoders.wwu',
  },
  android: {
    googleServicesFile: process.env.GOOGLE_SERVICES_JSON || process.env.GOOGLE_SERVICES_JSON_PATH,
    userInterfaceStyle: 'automatic',
    adaptiveIcon: {
      foregroundImage: './src/assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF',
    },
    splash: {
      image: './src/assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#FFFFFF',
      dark: {
        image: './src/assets/splash.png',
        resizeMode: 'contain',
        backgroundColor: '#121212',
      },
    },
    permissions: ['ACCESS_COARSE_LOCATION', 'ACCESS_FINE_LOCATION', 'ACCESS_BACKGROUND_LOCATION', 'FOREGROUND_SERVICE'],
    package: 'com.brightcoders.wwu',
  },
  web: {
    favicon: './src/assets/favicon.png',
  },
  sdkVersion: '47.0.0',
  plugins: ['@react-native-firebase/app', '@react-native-firebase/auth', '@react-native-google-signin/google-signin'],
  extra: {
    eas: {
      projectId: '1282976c-5e9c-4089-bff5-c456a6d34b49',
    },
    googleServices: process.env.GOOGLE_SERVICES_DATA
      ? (JSON.parse(process.env.GOOGLE_SERVICES_DATA) as { [key: string]: unknown })
      : undefined,
    openWeatherMapAPIKey: process.env.OPEN_WEATHER_MAP_API_KEY
      ? (process.env.OPEN_WEATHER_MAP_API_KEY as string)
      : undefined,
  },
  owner: 'brightcoders',
});
