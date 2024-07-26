import React,{useState} from 'react';
import { Text, StyleSheet, Image, SafeAreaView, Alert } from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const API_URL = 'https://cm9tkdbh-8000.inc1.devtunnels.ms';


const ConfirmSignUpScreen = ({ route, navigation }) => {

  const [confirmationcode,setconfirmationcode] = useState('');
  const { username, email, password} = route.params;
  const onConfirmPressed = async () => {
    try {
      const formData = new URLSearchParams();
      formData.append('email', email);
      formData.append('username', username);
      formData.append('password', password);
      formData.append('confirmation_code', confirmationcode);

      const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      });
      console.log(response)
      if (response.ok) {
        Alert.alert('Confirmation code verified.');
        navigation.navigate("HomeScreen");
      } else {
        Alert.alert('Invalid confirmation code.');
      }
    } catch (error) {
      console.error('Error verifying confirmation code', error);
      Alert.alert('An error occurred. Please try again.');
    }
    
  };
  const BackToSignInPressed = () => {
    console.warn("BackToSignInPressed");
    navigation.navigate("SignIn");
  };
  const onResendCodePressed = () => {
    console.warn("onResendCodePressed");
  };
  return (
    // <ScrollView>
      <SafeAreaView style={styles.container}>
        <Image
          source={{ uri: 'https://logos-world.net/wp-content/uploads/2020/09/Tinder-Logo.png' }}
          style={styles.tinderIcon}
        />
        <Text style={styles.title}>Confirm Email</Text>
        <CustomInput 
          placeholder = "Enter the confirmation code" 
          Value = {confirmationcode} 
          setValue = {setconfirmationcode} 
        />
        <CustomButton text="Confirm" onPress={onConfirmPressed} />
        {/* <CustomButton text="Resend Code" onPress={onResendCodePressed} type='TERTIARY'/> */}
        <CustomButton text="Back to Sign In" onPress={BackToSignInPressed} type='TERTIARY'/>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "#051C60",
    margin: 10,
  },
  link: {
    color: "#FDB075",
  },
  text: {
    color: "gray",
    marginVertical: 10,
    width: "100%",
  }
});

export default ConfirmSignUpScreen;
