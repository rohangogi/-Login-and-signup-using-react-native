// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, StyleSheet, Image} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import Animated, { Easing } from 'react-native-reanimated';

const SplashScreen = ({navigation}) => {
  //State for ActivityIndicator animation
 // const [animating, setAnimating] = useState(true);

 const animation = new Animated.Value(0);

  useEffect(() => {
		Animated.timing(animation, {
			toValue: 5040,
			duration: 3000,
			easing: Easing.linear
		}).start();
	}, []);

	const rotateInterPolate = animation.interpolate({
		inputRange: [ 0, 280 ],
		outputRange: [ '360deg', '0deg' ]
	});

	const animatedStyles = {
		transform: [ { rotate: rotateInterPolate } ]
	};

	const rotateAnimation = new Animated.Value(0);

	useEffect(() => {
		Animated.timing(rotateAnimation, {
			toValue: 5040,
			duration: 10000,
			easing: Easing.linear
		}).start();
	}, []);

	const rotateOut = animation.interpolate({
		inputRange: [ 0, 360 ],
		outputRange: [ '0deg', '360deg' ]
	});

	const rotateStyle = {
		transform: [ { rotate: rotateOut } ]
	};


  useEffect(() => {
    setTimeout(() => {
      //setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      AsyncStorage.getItem('user_id').then((value) =>
        navigation.replace(value === null ? 'Auth' : 'DrawerNavigationRoutes'),
      );
    }, 4000);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.view4, rotateStyle ]}>
      <Animated.Text style={[ styles.title1, animatedStyles ]}>🆁</Animated.Text>
      </Animated.View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2d3436',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
  title1:{
    //width: '50%', 
    //resizeMode: 'contain', 
    fontSize:40,
    margin: 30
  },
  view4: {
		backgroundColor: '#f1c40f',
		borderRadius: 10
	},
});
