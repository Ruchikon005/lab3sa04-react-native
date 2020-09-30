import React from 'react';
import { View ,Text,StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Weather from './Weather';

export default function HomeScreen() {    
    return (
        <View>
            <Weather zipCode='81110' />
            <StatusBar style="auto" />

        </View>
    );
}