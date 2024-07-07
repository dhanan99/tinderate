import React,{useState} from "react";
import {Text, Image, View, StyleSheet, ImageBackground} from 'react-native'
import LikeDislikeButtons from "../../Icons/likedislike";
import SwipeAnimation from "../../animation/SwipeAnimation";

const HomeScreen = ({ handleLike, handleUnlike, handleSuperlike }) => {
    return (
        <View style={styles.pageContainer}>
        
        <SwipeAnimation />
        <LikeDislikeButtons onLike={handleLike} onUnlike={handleUnlike} onSuperLike={handleSuperlike} />
        </View>
    )
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

export default HomeScreen;
