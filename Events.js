import React from 'react'
import { View, Image, Text } from 'react-native'
import iconMusic from './Picture/iconMusic.png'
import iconTichket from './Picture/icon_Tichket.png'
const Events = ({ item }) => {
    return (
        <View style={{ paddingBottom: 20, paddingTop: 20, }}>
            <View style={{ flexDirection: 'row' }}>
                <Image source={item.img} />
                <View style={{paddingLeft:10}}>
                    <Text style={{fontWeight:'500'}}>
                        {item.day}
                    </Text>
                    <Text style={{fontWeight:'bold',fontSize:16,paddingTop:4}}>
                        {item.title}
                    </Text>
                    <View style={{flexDirection: 'row',paddingTop:8}}>
                        <Image source={iconMusic} />
                        <Text style={{color:'#BDC0C4',paddingRight:10}}>{item.name}</Text>
                        <Image source={iconTichket} />
                        <Text style={{color:'#BDC0C4'}}>{item.price}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default Events