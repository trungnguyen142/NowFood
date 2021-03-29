import React from 'react';
import { Text, View, Image, ImageBackground, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native'
import MapProperty from './MapProperty';
import bitMap from './Picture/Bitmap.png'
import iconSearch from './Picture/icon_Search.png'
import iconLocate from './Picture/iconLocate.png'
import imgSearch from './Picture/img_Search.png'
import iconMusic from './Picture/iconMusic.png'
import iconTichket from './Picture/icon_Tichket.png'
const Propertys = [
    {
        key: 1,
        name: "€40-90"
    },
    {
        key: 2,
        name: "when"
    },
    {
        key: 3,
        name: "Category"
    },
    {
        key: 4,
        name: "Location"
    },
]
const Search = ({navigation}) => {
    return (
        <ImageBackground style={styles.container} source={bitMap}>
            <View style={styles.viewTop}>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput style={styles.tipSearch}
                        placeholder="Event name,artist,place"
                    />
                    <TouchableOpacity>
                        <Image style={styles.imgSearch} source={iconSearch} />
                    </TouchableOpacity>
                </View>
                <View style={styles.viewIcon}>
                    <FlatList
                        data={Propertys}
                        horizontal={true}
                        keyExtractor={(item) => item.key}
                        renderItem={({ item }) => <MapProperty item={item} />}
                    />
                    <TouchableOpacity>

                        <Image source={iconLocate} />

                    </TouchableOpacity>
                    </View>
            </View>
            <View style={{ flex: 1 }}>

            </View>
            <View style={{justifyContent: 'center',flex: 1,backgroundColor:'white',borderTopLeftRadius:30,borderTopRightRadius:30 }}>
                <TouchableOpacity >
                <View style={{flexDirection:'row'}}>
                    <Image source={imgSearch} />
                    <View style={{justifyContent:'center',marginLeft:-10}}>
                    <Text style={{paddingBottom:6}}>Daboi Concer… . FRIDAY AUG 24, 9PM</Text>
                    <Text style={{fontSize:16,fontWeight:'bold'}}>Brightlight Music Festival</Text>
                    <View style={{flexDirection:'row',marginTop:6}}>
                    <Image source={iconMusic} />
                    <Text style={{color:'#BDC0C4'}} >Indie Rock</Text>
                    <Image source={iconTichket} />
                    <Text style={{color:'#BDC0C4'}}>€40 - €90</Text>
                    </View>
                    </View>
                </View>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    viewIcon: {
        alignItems: 'flex-end',

    },
    imgSearch: {
        marginTop: 8,
        marginLeft: 10,
        marginLeft: -360
    },
    tipSearch: {
        borderRadius: 14,
        backgroundColor: 'white',
        width: '100%',
        height: 40,
        paddingLeft: 40

    },
    viewTop: {
        flex: 3,
        paddingTop:50,
        paddingLeft:10,
        paddingRight:10
    },
    container: {
        flex: 1,
    }
})
export default Search