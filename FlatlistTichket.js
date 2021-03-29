import React from 'react';
import {View,Text,StyleSheet, TouchableOpacity } from 'react-native'

const FlatlistTichket = ({item}) => {
    return(
        <TouchableOpacity>
        <View style={styles.viewFlatlist}>
            <Text style={styles.textProperty}>
                {item.property}
            </Text>
        </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    textProperty:{
        color:'white',
        fontWeight:'bold',
    },
    viewFlatlist:{
        height:30,
        backgroundColor:"rgba(125, 128, 132, 0.5)",
        marginLeft:10,
        paddingHorizontal:10,
        borderRadius:30,
        justifyContent:'center',

    }
})
export default FlatlistTichket