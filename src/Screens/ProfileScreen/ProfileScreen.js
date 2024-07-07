import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  const profile = {
    name: 'Alice',
    age: 25,
    bio: 'Loves traveling and outdoor adventures.',
    image: 'https://cdn.pixabay.com/photo/2023/10/27/10/28/girl-8344955_1280.jpg'
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: profile.image }} style={styles.profileImage} />
      <Text style={styles.name}>{profile.name}, {profile.age}</Text>
      <Text style={styles.bio}>{profile.bio}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.passButton}>
          <Text style={styles.buttonText}>Pass</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.likeButton}>
          <Text style={styles.buttonText}>Like</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  profileImage: {
    width: 300,
    height: 300,
    borderRadius: 150,
    marginBottom: 16,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bio: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 50,
  },
  passButton: {
    backgroundColor: '#ff4d4d',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
  },
  likeButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
