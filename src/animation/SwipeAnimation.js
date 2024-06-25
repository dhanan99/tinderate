import React, {useState} from 'react';
import { StyleSheet, View, Text, useWindowDimensions } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useDerivedValue,
  withSpring,
  withTiming,
  interpolate,
  rotate,
} from 'react-native-reanimated';
import { GestureHandlerRootView, PanGestureHandler, State, Gesture } from 'react-native-gesture-handler';
import Card from '../components/tindercard/index'
import users from '../../assets/data/users';

const ROTATION = 60;
const SWIPE_VELOCITY = 800;

const SwipeAnimation = () => {
  const pressed = useSharedValue(false);
  const offset = useSharedValue(0);
  const {width: screenWidth} = useWindowDimensions();

  const hiddenTranslateX = 2 * screenWidth;
  const cardData = users.slice(0, 6);
  const translateX = useSharedValue(0);
  

  // const cardStyle = useAnimatedStyle(() => ({
  //   transform: [
  //     {
  //       translateX: translateX.value,
  //     },
  //     {
  //       rotate: rotate.value,
  //     },
  //   ],
  // }));

  const renderCardStack = () => {
    return cardData.map((user, index) => {
      const translateX = useSharedValue(0);
      const translateY = useSharedValue(0);
      const zIndex = useDerivedValue(() => cardData.length - index); // Set z-index based on card index
      const rotate = useDerivedValue(
        () =>
          interpolate(translateX.value, [0, hiddenTranslateX], [0, ROTATION])
        + 'deg',
      );
    const onGestureEvent = (event) => {
      if (event.nativeEvent.translationX !== 0) {
        pressed.value = true;
      }
      offset.value = event.nativeEvent.translationX;
      translateX.value = event.nativeEvent.translationX;
    };

    const onHandlerStateChange = (event) => {
      if (event.nativeEvent.state === State.END) {
        pressed.value = false;
        if (Math.abs(offset.value) > 100) {
          // Perform navigation action based on swipe direction
          if (offset.value > 0) {
            // Swipe right, navigate to the next screen
            console.log("Swiped right");
            translateX.value = withSpring(hiddenTranslateX); 
            // Perform navigation action here
          } else {
            // Swipe left, navigate to the previous screen
            console.log("Swiped left");
            translateX.value = withSpring(-hiddenTranslateX);
            // Perform navigation action here
          }
          offset.value = withSpring(0);
          // translateX.value = withSpring(hiddenTranslateX);
        } else {
          offset.value = withSpring(0);
          translateX.value = withSpring(0);
        }
        // runOnJS(currentProfile);
      }
    };

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { scale: interpolate(translateY.value, [0, 100], [1, 0.8]) }, // Scale down as card moves up
      // { scale: withTiming(pressed.value ? 1.2 : 1) },
      { rotate: rotate.value},

    ],
    zIndex: zIndex.value,
  }));
    
    return (
        <PanGestureHandler
          key={index}
          onGestureEvent={onGestureEvent}
          onHandlerStateChange={onHandlerStateChange}>
              <Animated.View style={[styles.cardContainer, animatedStyles]}>
                <Card user={user}/>
              </Animated.View>
        </PanGestureHandler>
    );
  });
  
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      {renderCardStack()}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    height: "80%",
    width: "95%",
    marginTop: 100,
  },
  animatedCard: {
    width: '95%',
    height: '70%',

    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    position :'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    // marginTop: 'auto'
  }
});

export default SwipeAnimation;
