import React from 'react'
import { View, Text, ScrollView, StyleSheet, FlatList, Image, ImageBackground } from 'react-native'
import FlatListItem from './FlatListItem.js'
import ListDiscover from './ListDiscover.js'
import imgbackground from './Picture/imgBackground.png'
import vieww from './Picture/12311.png'
import imageForyou from './Picture/imageForyou.png'
import volume from './Picture/volume.png'
import iconMusic from './Picture/icon_Music.png'
import iconCheckMap from './Picture/iconCheckMap.png'
import iconSport from './Picture/iconSport.png'
import Timeline from 'react-native-timeline-flatlist'
import imgTitle from './Picture/img_Titlebgr.png'
import imgTitleBot from './Picture/img_Titlebgr2.png'
import imgTitleBotbgr from './Picture/img_Titlebgr3.png'
import iconTichket from './Picture/icon_Tichket.png'
import iconMusicc from './Picture/iconMusic.png'
import muitenRight from './Picture/muitenright.png'
const timeData = [
  { dayTxt: 'Thu', dayNum: 12, title: 'Event 1', description: { image: imgTitle, title: 'Brightlight Music Festival', category: 'Indie Rock', price: '€40 - €90', moreevent: 3, imageBot: imgTitleBot } },
  { dayTxt: 'Fri', dayNum: 13, title: 'Event 2', description: { image: imgTitleBotbgr, title: 'Brightlight Music Festival', category: 'Indie Rock', price: '€40 - €90', moreevent: 6, imageBot: imgTitleBot } },
  //{date: '12/09/2020'}
]
const data = [
  {
    key: 1,
    title: 'Electronica Next Month',
    music: 'electronica',
    image: imgbackground
  },
  {
    key: 2,
    title: 'Electronica Next Month',
    music: 'electronica',
    image: imgbackground
  }
]
const listData = [
  {
    key: 1,
    icon: iconCheckMap,
    active: 'YOUR AREA',
    color: '#FC1055'
  },
  {
    key: 2,
    icon: iconMusic,
    active: 'MUSIC',
    color: '#5798FF'
  },
  {
    key: 3,
    icon: iconSport,
    active: 'SPORT',
    color: '#E69960'
  }

]
const Home = () => {

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.top}>
          <Image source={imageForyou} />
          <Image source={volume} />
          <Text style={{ color: '#D5DDDD' }}>
            Tap to set filter
          </Text>
        </View>
        <View style={{ height: 250 }}>
          <Text style={styles.textCollections}>Collections</Text>
          <FlatList
            horizontal={true}
            data={data}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => <FlatListItem item={item} />}

          />
        </View>
        <View style={{ height: 170 }}>
          <Text style={styles.textDiscover}>Discover</Text>
          <FlatList
            horizontal={true}
            data={listData}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => <ListDiscover item={item} />}

          />
        </View>
        <View>
          <Image source={vieww} />
          <Timeline
            data={timeData}
            lineColor='grey'
            circleColor='transparent'
            lineWidth={0}
            listViewStyle={{borderLeft: '2px dotted black'}}
            listViewContainerStyle={{borderLeft: '2px dotted black'}}
            rowContainerStyle={{borderLeft: '2px dotted black'}}
            detailContainerStyle={{ paddingBottom: 20 }}
            timeStyle={{ textAlign: 'center', backgroundColor: '#FFFFFF', padding: 5, borderRadius: 13, fontWeight: 'bold', fontSize: 20 }}
            renderTime={(rowData, sectionID, rowID) => {
              return (
                <View style={{ backgroundColor: 'white', width: 40, height: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 14 }}>
                  <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                    {rowData.dayNum}
                  </Text>
                  <Text style={{ color: 'grey', fontWeight: 'bold' }}>
                    {rowData.dayTxt}
                  </Text>
                </View>
              )
            }}
            renderDetail={(rowData, sectionID, rowID) => {
              return (
                <View style={{width: 287, height: 170}}>
                  <ImageBackground imageStyle={{ borderRadius: 10}} style={{flex: 1,justifyContent:'flex-end',padding:20}} source={rowData.description.image} >
                    <View>
                      <Text style={{color:'white',fontSize: 20,fontWeight:'bold',paddingBottom:10 }}>
                        {rowData.description.title}
                      </Text>
                      <View style={{flexDirection:'row'}}>
                        <Image source={iconMusicc} />
                      <Text style={{color:'#F7F7F7',paddingRight:10}}>
                        {rowData.description.category}
                      </Text>
                      <Image source={iconTichket} />
                      <Text style={{color:'#F7F7F7'}}>
                        {rowData.description.price}
                      </Text>
                      </View>
                    </View>
                  </ImageBackground>
                  <ImageBackground style={{marginTop:10,width:287, height:40}} source={rowData.description.imageBot} >
                    <View style={{flexDirection:'row',marginTop:6}}>
                    <Text style={{color:'white',paddingRight:6,paddingLeft:6,fontWeight: 'bold'}}>
                    {rowData.description.moreevent}
                    </Text>
                    <Text style={{color:'white',fontWeight: 'bold'}}>
                     EVENTS MORE
                    </Text>
                    </View>
                  </ImageBackground>
                </View>
              )
            }}
          />
        </View>
      </View>
    </ScrollView>

  )
}
const styles = StyleSheet.create({
  textDiscover: {
    fontWeight: 'bold',
    fontSize: 28,
  },
  textCollections: {
    fontWeight: 'bold',
    fontSize: 28,
    paddingBottom: 30
  },
  container: {
    flex: 1,
    backgroundColor: '#FDF7F7',
    padding: 10,
  },
  top: {
    flex: 1,
    height: 300,
    marginTop: 50,
    alignItems: 'center'
  }
})
export default Home