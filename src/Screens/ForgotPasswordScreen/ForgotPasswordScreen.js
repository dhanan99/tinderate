import React,{useState} from 'react';
import { Text, StyleSheet, Image, SafeAreaView, Alert} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const API_URL = 'https://cm9tkdbh-8000.inc1.devtunnels.ms';

const ForgotPasswordScreen = ({ navigation }) => {

  const [email,setemail] = useState('');
  const sendConfirmationCode = async () => {
    try {
      const response = await fetch(`${API_URL}/send-confirmation-code`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      console.log(response)
      if (response.ok) {
        Alert.alert('Confirmation code sent to your email.');
        navigation.navigate("NewPassword");
      } else {
        Alert.alert('Failed to send confirmation code.');
      }
    } catch (error) {
      console.error('Error sending confirmation code', error);
      Alert.alert('An error occurred. Please try again.');
    }
    
  };
    
  const BackToSignInPressed = () => {
    console.warn("BackToSignInPressed");
    navigation.navigate("SignIn");
  };
  return (
    // <ScrollView>
      <SafeAreaView style={styles.container}>
        <Image
          source={{ uri: 'https://logos-world.net/wp-content/uploads/2020/09/Tinder-Logo.png' }}
          style={styles.tinderIcon}
        />
        <Text style={styles.title}>Reset Password</Text>
        <CustomInput 
          placeholder = "Email" 
          Value = {email} 
          setValue = {setemail} 
        />
        <CustomButton text="Send" onPress={sendConfirmationCode} />
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

export default ForgotPasswordScreen;
