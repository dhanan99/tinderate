import React,{useState} from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView,Alert} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const API_URL = 'http://192.168.1.3:8000';

const LoginScreen = ({ navigation }) => {

  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const onSignInPressed = async () => {
    try {
      const formData = new URLSearchParams();
      formData.append('username', username);
      formData.append('password', password);
      const formDataString = new URLSearchParams(formData).toString();
      const response = await fetch(`http://192.168.1.3:1343/token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`,
      });
      console.log('Debug', response.json());
      if (response.ok) {
        const data = await response.json();
        console.log('Login successful', data);
        navigation.navigate('HomeScreen');
      } 
      else {
        const errorData = await response.json();
        console.log('Login unsuccessful', errorData);
        Alert.alert(`Error: ${errorData.detail}`);
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
