import React from 'react';
import { View } from 'react-native';
import Weather from './Weather';
import { StatusBar } from 'expo-status-bar';

export default function WeatherScreen({route}) {    
    return (
        <View style={{backgroundColor:'#FFC300',width:'100%',height:'100%'}}>
            <Weather zipCode={route.params.zipCode} />
            <StatusBar style="auto" />
        </View>
    );
}
