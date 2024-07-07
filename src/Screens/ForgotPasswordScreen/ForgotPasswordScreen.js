import React,{useState} from 'react';
import { Text, StyleSheet, Image, SafeAreaView,} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';


const ForgotPasswordScreen = ({ navigation }) => {

  const [username,setusername] = useState('');
  const onSendPressed = () => {
    console.warn("onConfirmPressed");
    navigation.navigate("NewPassword");
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
          placeholder = "Username" 
          Value = {username} 
          setValue = {setusername} 
        />
        <CustomButton text="Send" onPress={onSendPressed} />
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
