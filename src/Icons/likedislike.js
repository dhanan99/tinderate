import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

const LikeDislikeButtons = ({ onLike, onUnlike, onSuperLike }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onLike}>
        <Image source={{uri: 'https://logodix.com/logo/306616.png'}} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onSuperLike}>
        <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/4992/4992172.png'}} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onUnlike}>
        <Image source={{uri: 'https://logodix.com/logo/306582.png'}} style={styles.icon} />
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginHorizontal: 10,
  },
});

export default LikeDislikeButtons;
