import React,{useState} from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView,} from 'react-native';
import CustomInput from '../CustomInput/CustomInput';
import CustomButton from '../CustomButton/CustomButton';
const LoginScreen = () => {

  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const onSignInPressed = () => {
    console.warn("SignIn");
  };
  const onForgotPasswordPressed = () => {
    console.warn("Forgot Password");
  };
  const onSignUpPressed = () => {
    console.warn("Sign Up");
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
    // </ScrollView>
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
