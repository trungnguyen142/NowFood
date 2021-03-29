import React from 'react'
import {View,Text,Image} from 'react-native'
import iconMusic from './Picture/iconMusic.png'
const Places = ({item}) => {
    return (
        <View>
            <View style={{flexDirection: 'row',paddingBottom:20,paddingTop:20}}>
                <Image source={item.img} />
                <View style={{paddingLeft:10}}>
                    <Text style={{paddingBottom:4,fontWeight:'500'}}>
                        {item.name}
                    </Text>
                    <Text style={{paddingBottom:6,fontWeight:'bold',fontSize:16}}>
                        {item.title}
                    </Text>
                    <View>
                        <View style={{flexDirection: 'row'}}>
                        <Image source={iconMusic}  />
                        <Text style={{color:'#BDC0C4'}}>
                            {item.prop}
                        </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default Places