import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Weather from './Weather';


export default function HomeScreen() {
    return (
        <View style={{ backgroundColor: '#FFC300', width: '100%', height: '100%' }}>
            <Weather cityname='Phuket' />
            <StatusBar style="auto" />
        </View>
    );
}