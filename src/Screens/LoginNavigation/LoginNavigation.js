import React from 'react';
import {Text, Image, View, StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../LoginScreen/LoginScreen'
import SignUpScreen from '../SignUpScreen/SignUpScreen';
import ConfirmSignUpScreen from '../ConfirmSignUpScreen/ConfirmSignUpScreen';
import ForgotPasswordScreen from '../ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from '../NewPasswordScreen/NewPasswordScreen';
import Navigation from '../../components/tindercard/navbar/navbar';

const Stack = createStackNavigator();

const LoginNavigation = () => {
  return (
    <NavigationContainer independent={true}>
        <Stack.Navigator screenOptions={{headerShown: false}} >
            <Stack.Screen name='SignIn' component={LoginScreen} />
            <Stack.Screen name='SignUp' component={SignUpScreen} />
            <Stack.Screen name='ConfirmEmail' component={ConfirmSignUpScreen} />
            <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
            <Stack.Screen name='NewPassword' component={NewPasswordScreen} />
            <Stack.Screen name='HomeScreen' component={Navigation} />
        </Stack.Navigator>
    </NavigationContainer>
  );

};
// const styles = StyleSheet.create({
//   pageContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     flex: 1,
//     // backgroundColor: 'green'
//   },
//   tinderIcon: {
//     width: 400,
//     height: 100,
//     resizeMode: 'contain',
//     // backgroundColor: 'red',
//   },
//   // tinderBlock: {
//   //   position: 'absolute',
//   //   top: -15, // Adjust top position as needed
//   //   left: 20, // Adjust left position as needed
//   //   zIndex: 1,
//   // },
// })
export default LoginNavigation;
