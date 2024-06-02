import React from 'react';
import {Text, Image, View, StyleSheet, ImageBackground} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../../HomeScreen/HomeScreen'
import MatchesScreen from '../../MatchesScreen/MatchesScreen'
import ProfileScreen from '../../ProfileScreen/ProfileScreen';

const Tab = createBottomTabNavigator();

const Navigation = ({ handleLike, handleUnlike, handleSuperlike }) => {
  return (
    
    <NavigationContainer>
      <View>
            <Image source={{uri: 'https://logos-world.net/wp-content/uploads/2020/09/Tinder-Logo.png'}} style={styles.tinderIcon} />
        </View>
      <Tab.Navigator
        screenOptions = {({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Matches') {
              iconName = focused ? 'heart' : 'heart-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home">
          {() => <HomeScreen handleLike={handleLike} handleUnlike={handleUnlike} handleSuperlike={handleSuperlike} />}
        </Tab.Screen>
        <Tab.Screen name="Matches" component={MatchesScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
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
export default Navigation;
