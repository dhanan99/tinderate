import React,{useState} from "react";
import {Text, Image, View, StyleSheet, ImageBackground} from 'react-native'
import Navigation from "./src/components/tindercard/navbar/navbar";
import LoginNavigation from "./src/Screens/LoginNavigation/LoginNavigation";
import LoginScreen from "./src/Screens/LoginScreen/LoginScreen";
const App = () => {
   return (
    // <View style={styles.pageContainer}>
    //   {isLoggedIn ? (
    //     <Navigation 
    //       handleLike={handleLike} 
    //       handleUnlike={handleUnlike} 
    //       handleSuperlike={handleSuperlike} 
    //     />
    //   ) : (
    //     <LoginNavigation />
    //   )}
    // </View>
    <LoginNavigation />
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
