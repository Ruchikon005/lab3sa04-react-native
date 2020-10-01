import React from 'react';
import { View, Text, StyleSheet, Image ,b } from 'react-native';


export default function Forecast(props) {
    return (
        <View style={styles.center}>
            <Text style={styles.maxbig}><b>{props.name}</b></Text>
            <Image
                style={{
                    height: 200,
                    width: 200
                }}
                source={{ uri: "http://openweathermap.org/img/wn/" + props.icon + "@2x.png" }}
            />
            
            <Text style={styles.medium}>{props.main}</Text>
            <Text style={styles.small}>{props.description}</Text>
            <View style={{ marginTop: 20 }}>
                <Text>
                    <Text style={styles.big}>{props.temp}  </Text>
                    <Text style={styles.big}>°C</Text>
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    center: {
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    maxbig: {
        marginTop: 20,
        fontSize: 50,
        color: '#319478',
    },
    big: {
        marginTop: 20,
        fontSize: 40,
        color: '#319478',
        
    },
    medium: {
        marginTop: 0,
        fontSize: 30,
        color: 'white',
    },
    small: {
        marginTop: 20,
        fontSize: 15,
        color: 'white',
    }
})
