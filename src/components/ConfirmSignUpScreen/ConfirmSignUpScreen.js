import React,{useState} from 'react';
import { Text, StyleSheet, Image, SafeAreaView,} from 'react-native';
import CustomInput from '../CustomInput/CustomInput';
import CustomButton from '../CustomButton/CustomButton';
const ConfirmSignUpScreen = () => {

  const [confirmationcode,setconfirmationcode] = useState('');
  const onConfirmPressed = () => {
    console.warn("onConfirmPressed");
  };
  const BackToSignInPressed = () => {
    console.warn("BackToSignInPressed");
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
        <CustomButton text="Resend Code" onPress={onResendCodePressed} type='TERTIARY'/>
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
