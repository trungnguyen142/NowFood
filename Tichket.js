import React from 'react';
import {View,Text, ImageBackground,StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import backgroundTichket from './Picture/backgroundTichket.png'
import FlatlistTichket from './FlatlistTichket'
const listItem = [
    {
        key:1,
        property: 'Phil Collins'
    },
    {
        key:2,
        property: 'TV on the Radio'
    },
    {
        key:3,
        property: 'FC Barcelona'
    }
]
const Tichket = () => {
    return(
        <View style={styles.container}>
            <ImageBackground style={styles.backgroundImg} source={backgroundTichket}>
                <View style={styles.innerViewTop}>
                <Text style={styles.textTop}>
                    Popular
                </Text>
                <FlatList 
                horizontal={true}
                data={listItem}
                keyExtractor={(item) => item.key}
                renderItem={({item})  => <FlatlistTichket item={item} />}

                />
                </View>
                <View style={{flex: 1}}>

                </View>
            </ImageBackground>
            <View style={styles.body}>
                <Text style={styles.textBody}>
                No tickets bought
                </Text>
                <Text style={{color:'#B3B8B8'}}>
                It appears you haven’t bought any tickets yet.
                </Text>
                <View>
                <Text style={{color:'#B3B8B8'}}>
                Maybe try searching these?
                </Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    textBody:{
        fontSize:28,
        fontWeight:'bold',
        paddingBottom:20
    },
    textTop:{
        color:'white',
        fontWeight:'bold',
        fontSize:28,
        paddingBottom:20
    },
    innerViewTop:{
        flex: 1,
        paddingLeft:10,
        paddingTop:100
    },
    body:{
        flex:1,
        alignItems:'center',
        paddingTop:20,
        

    },
    backgroundImg:{
        flex: 2,
        justifyContent:'center'
    },
    container:{
    flex:1
} 
})
export default Tichket