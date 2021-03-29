import React from 'react'
import { ImageBackground, View,StyleSheet,Text,Image, TouchableOpacity} from 'react-native'
const ListDiscover = ({item}) => {
    return (
        <TouchableOpacity>
        <View style={styles.container}>
                <Image source={item.icon} />
                <Text style={[styles.textActive, {color: item.color}]}>
                    {item.active}
                </Text>
        </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    textActive:{
        paddingLeft:10,
        fontSize:12,
        fontWeight:'bold',
    },
    container:{
        width:145,
        height:56,
        backgroundColor:'#FFFFFF',
        borderRadius:30,
        flexDirection:'row',
        alignItems: 'center',
        marginLeft:10,
        marginTop:10,
        paddingLeft:6,
    }
})
export default ListDiscover