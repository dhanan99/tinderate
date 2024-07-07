import React from 'react';
import { Image, View, StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../../../Screens/HomeScreen/HomeScreen'
import MatchesScreen from '../../../Screens/MatchesScreen/MatchesScreen'
import ProfileScreen from '../../../Screens/ProfileScreen/ProfileScreen';
import ChatScreen from '../../../Screens/ChatScreen/ChatScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MatchesStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="MatchesMain" component={MatchesScreen} />
    <Stack.Screen name="Chat" component={ChatScreen} />
  </Stack.Navigator>
);

const Navigation = ({ handleLike, handleUnlike, handleSuperlike }) => {
  return (
    <NavigationContainer independent={true}>
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
        <Tab.Screen name="Matches" component={MatchesStack} />
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
