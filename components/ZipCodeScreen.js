import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, TouchableHighlight, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]

const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code},{zipCode : place})}>
        <View style={styles.container}>
            <View style={{flex: 1}}>
                <Text style={{fontSize: 25,color:'#319478'}}>{place}</Text>
            </View>
            <View style={styles.container1}>
                <Text style={styles.text}>{code}</Text>
            </View>
        </View>
    </TouchableHighlight>
)

const _keyExtractor = item => item.code

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <View style={{backgroundColor:'#FFC300',width:'100%',height:'100%'}}>
            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
            />
            <StatusBar style="auto" />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
        marginHorizontal:20,
        //borderColor: 'red',
        //borderWidth: 3,
        flex: 1,
    },
    text:{
        
        fontSize: 15,
        textAlign: "right",
        color:'#319478',
    },
    container1: {
        flexDirection:'column',
        justifyContent:'flex-end',
        flex: 1 ,
        //borderColor: 'red',
       // borderWidth: 3
    }

});
