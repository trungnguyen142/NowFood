import React from 'react'
import { View, Text, Image } from 'react-native'
import iconMusic from './Picture/iconMusic.png'
const Performers = ({ item }) => {
    return (
        <View style={{ marginTop: 20 }}>
            <View style={{ flexDirection: 'row' }}>
                <Image source={item.img} />
                <View style={{paddingLeft:10}}>
                    <Text style={{fontWeight:'bold',fontSize:16,paddingBottom:6}}>
                        {item.title}
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={iconMusic} />
                        <Text style={{color:'#C1C4C9'}}>
                            {item.music}
                        </Text>
                    </View>
                    <Text style={{paddingTop:4,color:'#C1C4C9'}}>{item.event}</Text>
                </View>
            </View>

        </View>
    )
}
export default Performers