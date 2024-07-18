import React,{useState} from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView,Alert} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import axios from 'axios';

const API_URL = 'https://cm9tkdbh-8000.inc1.devtunnels.ms';

const LoginScreen = ({ navigation }) => {

  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const onSignInPressed = async () => {
    try {
      const formData = new URLSearchParams();
      formData.append('username', username);
      formData.append('password', password);
      console.log("uname:", username)
      console.log("password:", password)
      const response = await fetch(`${API_URL}/token`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      });
      // const response = await fetch(`https://cm9tkdbh-8000.inc1.devtunnels.ms/`, {
      //   method: 'GET'
      // });
      console.log("Response", response)
      if (response.ok) {
        console.log('Login Successful', response);
        navigation.navigate('HomeScreen');
      } else {
        const errorData = await response.json();
        console.log('Login unsuccessful', errorData);
        Alert.alert('Please enter valid credentials');
      }
    } catch (error) {
      console.error('Login error', error);
      Alert.alert('An error occurred. Please try again.');
    }
  };
  const onForgotPasswordPressed = () => {
    console.warn("Forgot Password");
    navigation.navigate("ForgotPassword");
  };
  const onSignUpPressed = () => {
    console.warn("Sign Up");
    navigation.navigate("SignUp");
  };
  return (
    // <ScrollView>
      <SafeAreaView style={styles.container}>
        <Image
          source={{ uri: 'https://logos-world.net/wp-content/uploads/2020/09/Tinder-Logo.png' }}
          style={styles.tinderIcon}
        />
        <CustomInput 
          placeholder = "Username" 
          Value = {username} 
          setValue = {setUsername} 
          secureTextEntry={false}
        />
        <CustomInput 
          placeholder = "Password"
          Value = {password} 
          setValue = {setPassword} 
          secureTextEntry={true}
        />
        <CustomButton text="Sign In" onPress={onSignInPressed} />
        <CustomButton text="Forgot Password?" onPress={onForgotPasswordPressed} type='TERTIARY'/>
        <CustomButton text="Don't have an account? Create one" onPress={onSignUpPressed} type='TERTIARY'/>
      </SafeAreaView>
    //</ScrollView> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    width: "100%"
  },
  tinderIcon: {
    width: 400,
    height: 100,
    resizeMode: 'contain',
    // backgroundColor: 'red',
  },
});

export default LoginScreen;
