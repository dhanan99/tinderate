import React,{useState} from 'react';
import { Text, StyleSheet, Image, SafeAreaView,} from 'react-native';
import CustomInput from '../CustomInput/CustomInput';
import CustomButton from '../CustomButton/CustomButton';
const SignUpScreen = () => {

  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [PasswordRepeat,setPasswordRepeat] = useState('');
  const onRegisterPressed = () => {
    console.warn("onRegisterPressed");
  };
  const onTermsofUsePressed = () => {
    console.warn("onTermsofUsePressed");
  };
  const onPrivacyPolicy = () => {
    console.warn("onPrivacyPolicy");
  };
  return (
    // <ScrollView>
      <SafeAreaView style={styles.container}>
        <Image
          source={{ uri: 'https://logos-world.net/wp-content/uploads/2020/09/Tinder-Logo.png' }}
          style={styles.tinderIcon}
        />
        <Text style={styles.title}>Create an account</Text>
        <CustomInput 
          placeholder = "Username" 
          Value = {username} 
          setValue = {setUsername} 
        />
        <CustomInput 
          placeholder = "Email Address" 
          Value = {email} 
          setValue = {setEmail} 
        />
        <CustomInput 
          placeholder = "Password"
          Value = {password} 
          setValue = {setPassword} 
          secureTextEntry={true}
        />
        <CustomInput 
          placeholder = "Repeat Password"
          Value = {PasswordRepeat} 
          setValue = {setPasswordRepeat} 
          secureTextEntry={true}
        />
        <CustomButton text="Register" onPress={onRegisterPressed} />
        <Text style={styles.text}>
          By registering, you confirm that you accept our {' '}
          <Text style = {styles.link} onPress={onTermsofUsePressed}>Terms of Use</Text> and {' '} 
          <Text style = {styles.link} onPress={onPrivacyPolicy}>Privacy Policy</Text>
        </Text>
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

export default SignUpScreen;
