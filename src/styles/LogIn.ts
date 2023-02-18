import { StyleSheet } from 'react-native';
import { ILogInContext } from '../types/LogIn';

export default (context: ILogInContext) => {
  return {
    screen: {
      style: StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: context.colors.primary,
          alignItems: 'center',
          justifyContent: 'center',
        },
        text: {
          color: context.colors.text,
        },
      }),
    },
  };
};
