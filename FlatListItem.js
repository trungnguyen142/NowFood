import React from 'react'
import { ImageBackground, View,StyleSheet,Text,Image} from 'react-native'
import iconMusic from './Picture/iconMusic.png'

const FlatListItem = ({item}) => {
    return(
        <ImageBackground style={styles.container} source={item.image}>
        <View style={{flex:5}}>   
        <Text style={styles.textTitle}>
                {item.title}
            </Text>
            <View style={styles.row}>
                <Image style={styles.imgMusic} source={iconMusic} />
                <Text style={styles.textMusic}>
                    {item.music}
                </Text>
            </View>
            </View> 
            <View style={{flex:1,}}>
                <Text style={styles.textBottom}>
                    Learn More
                </Text>
            </View>
            
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    textBottom:{
        color:'white',
       fontWeight:'bold',
    },
    textMusic:{
        color:'white'
    },
    row:{
        flexDirection:'row'
    },
    textTitle:{
        color:'white',
        fontSize:22,
        fontWeight:'bold'

    },
    container:{
        width:320,
        height:160,
        marginRight:10,
        padding:14
        
    },
})
export default FlatListItem