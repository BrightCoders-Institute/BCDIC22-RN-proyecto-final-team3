import 'dotenv/config';
import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
	...config,
	name: 'WWU',
	slug: 'WWU',
	version: '1.0.0',
	orientation: 'portrait',
	icon: './src/assets/icon.png',
	userInterfaceStyle: 'light',
	splash: {
		image: './src/assets/splash.png',
		resizeMode: 'contain',
		backgroundColor: '#FFFFFF',
	},
	updates: {
		fallbackToCacheTimeout: 0,
	},
	assetBundlePatterns: ['**/*'],
	ios: {
		// googleServicesFile: './GoogleService-Info.plist',
		supportsTablet: true,
		// bundleIdentifier: 'com.brightcoders.wwu',
	},
	android: {
		//googleServicesFile: process.env.GOOGLE_SERVICES_JSON || process.env.GOOGLE_SERVICES_JSON_PATH,
		adaptiveIcon: {
			foregroundImage: './src/assets/adaptive-icon.png',
			backgroundColor: '#FFFFFF',
		},
		package: 'com.brightcoders.wwu',
	},
	web: {
		favicon: './src/assets/favicon.png',
	},
	sdkVersion: '47.0.0',
	// plugins: ['@react-native-firebase/app', '@react-native-firebase/auth', '@react-native-google-signin/google-signin'],
	extra: {
		googleServices: process.env.GOOGLE_SERVICES_DATA
			? (JSON.parse(process.env.GOOGLE_SERVICES_DATA) as { [key: string]: unknown })
			: undefined,
	},
	owner: 'brightcoders',
});
