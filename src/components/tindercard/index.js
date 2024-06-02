import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, useWindowDimensions } from 'react-native';

const Card = ({ user }) => {
  const { name, bio, image } = user;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const screenWidth = useWindowDimensions().width;

  const handleTap = (event) =>  {
    const tapX = event.nativeEvent.locationX;
    if (tapX < screenWidth / 2) {
      // Tapped on the left side of the card
      const prevIndex = (currentImageIndex - 1 + image.length) % image.length;
      setCurrentImageIndex(prevIndex);
    } else {
      // Tapped on the right side of the card
      const nextIndex = (currentImageIndex + 1) % image.length;
      setCurrentImageIndex(nextIndex);
    }
  };
  
  
  return (
    <TouchableOpacity onPress={handleTap} style={styles.card}>
      <Image source={{ uri: image[currentImageIndex] }} style={styles.image} />
      <View style={styles.cardInner}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.bio}>{bio}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: '100%',
    // backgroundColor: '',
    borderRadius: 10,
    alignContent: 'center',
    backgroundColor: '#DDDDDD',
    shadowColor: '#000',
    shadowOffset: {
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 6.27,
    elevation: 10,
    marginTop: -100,
     
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
    
  },
  cardInner: {
    padding: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bio: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default Card;
