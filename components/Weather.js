import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native';
import Forecast from './Forecast';


const apiKey = '6cecb9dd2e369d7e9b5d62bc682150d4'


export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0,
    })

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        console.log(`fetching data with cityname = ${props.cityname}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=${apiKey}`)
                .then((response) => response.json())

                .then((json) => {
                    console.log('json: ', json.weather)
                    // console.log(json.weather[0].main)
                    setForecastInfo({
                        lon: json.coord.lon,
                        lat: json.coord.lat,
                        name: json.name,
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp,
                        icon: json.weather[0].icon
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
        }
        else if (props.cityname) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.cityname},th&units=metric&APPID=${apiKey}`)
                .then((response) => response.json())

                .then((json) => {
                    console.log('json: ', json.weather)
                    // console.log(json.weather[0].main)
                    setForecastInfo({
                        name: json.name,
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp,
                        icon: json.weather[0].icon
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
        }
    }, [props.zipCode], [props.cityname])


    return (
        <View>
            <ImageBackground style={styles.backdrop}>
                <View >
                    <Text style={styles.medium}>
                        {props.zipCode
                            ? 'Zipcode : ' + props.zipCode
                            : 'Welcome' }
                    </Text>
                    <Forecast {...forecastInfo} />
                </View>
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    backdrop: {
        textAlign: "center",
    },
    medium: {
        textAlign: "center",
        marginTop: 32,
        fontSize: 15,
        color: 'white',
    }
});
