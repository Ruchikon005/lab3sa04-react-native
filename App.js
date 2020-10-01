//import liraries
import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import Weather from './components/Weather'
import WeatherScreen from './components/WeatherScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ZipCodeScreen from './components/ZipCodeScreen';
import HomeScreen from './components/HomeScreen'
import Ionicons from 'react-native-vector-icons/Ionicons';


const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#FFC300' },
      }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

const WeatherStack = createStackNavigator();

function WeatherStackScreen() {
  return (
    <WeatherStack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#FFC300' },
      }}>
      <WeatherStack.Screen name="Location" component={ZipCodeScreen} />
      <WeatherStack.Screen name="Weather" component={WeatherScreen} />
    </WeatherStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

// create a component
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'ios-home'
            } else if (route.name === 'Location') {
              iconName = 'ios-sunny'
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        })}
        tabBarOptions={{
          activeTintColor: '#319478',
          inactiveTintColor: '#FF9B14',
          style: {backgroundColor:'rgba(255,255,255,0.3)',
          position: 'absolute',
          elevation: 0 ,

        }
        }}

      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Location" component={WeatherStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};


export default App;
