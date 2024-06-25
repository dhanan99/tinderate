import React,{useState} from 'react';
import {Text, StyleSheet, Pressable,} from 'react-native';
const CustomButton = ({text,onPress,type="PRIMARY"}) => {

  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
        <Text style={[styles.text, styles[`text_${type}`]]}>
            {text}
        </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginHorizontal: 50,
    marginBottom: 5,
  },
  container_PRIMARY: {
    backgroundColor: "#3B71F3",
  },
  container_TERTIARY: {

  },
  text: {
   fontWeight: "bold",
   color: "white",
   fontSize: 19,
  },
  text_TERTIARY: {
    color: "gray",
    fontSize: 17,
  }
});

export default CustomButton;
