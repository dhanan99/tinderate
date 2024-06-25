import React,{useState} from "react";
import {Text, Image, View, StyleSheet, ImageBackground} from 'react-native'
import Navigation from "./src/components/tindercard/navbar/navbar";
import LoginScreen from "./src/components/LoginScreen/LoginScreen";
import SignUpScreen from "./src/components/SignUpScreen/SignUpScreen";
import ConfirmSignUpScreen from "./src/components/ConfirmSignUpScreen/ConfirmSignUpScreen";
const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLike = () => {
    console.log('Liked!');
    setCurrentIndex((prevIndex) => prevIndex + 1);
    // Add logic for liking the current card
  };
  const handleUnlike = () => {
    console.log('Unliked!');
    setCurrentIndex((prevIndex) => prevIndex + 1);
    // Add logic for unliking the current card
  };
  const handleSuperlike = () => {
    console.log('Super Liked!');
    setCurrentIndex((prevIndex) => prevIndex + 1);
    // Add logic for superliking the current card
  };
  return (
    <View style={styles.pageContainer}>
      {isLoggedIn ? (
        <Navigation 
          handleLike={handleLike} 
          handleUnlike={handleUnlike} 
          handleSuperlike={handleSuperlike} 
        />
      ) : (
        <ConfirmSignUpScreen />
      )}
    </View>
  );


};
const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    // backgroundColor: 'green'
  },
  tinderIcon: {
    width: 400,
    height: 100,
    resizeMode: 'contain',
    // backgroundColor: 'red',
  },
  // tinderBlock: {
  //   position: 'absolute',
  //   top: -15, // Adjust top position as needed
  //   left: 20, // Adjust left position as needed
  //   zIndex: 1,
  // },
})
export default App;
