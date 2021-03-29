import React from 'react';
import {View,Text,StyleSheet, TouchableOpacity } from 'react-native'

const MapProperty = ({item}) => {
    return(
        <TouchableOpacity>
        <View style={styles.container}>
            <Text style={styles.textName}>
                {item.name}
            </Text>
        </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container:{
        height:36,
        backgroundColor:'white',
        marginLeft:10,
        paddingHorizontal:20,
        justifyContent:'center',
        borderRadius:20,
        marginTop:16
    },
    textName:{
        color:'#A6AAB1',
        fontWeight:'bold'
    }
})
export default MapProperty