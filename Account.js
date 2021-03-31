import React from 'react';
import { Text, View, Image, ImageBackground, StyleSheet, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import MapProperty from './MapProperty';
import Events from './Events'
import Places from './Places'
import Performers from './Performers'
import iconSearch from './Picture/icon_Search.png'
import imgEvents from './Picture/img_Events1.png'
import imgEvents2 from './Picture/img_Events2.png'
import imgPlaces1 from './Picture/img_Places1.png'
import imgPlaces2 from './Picture/img_Places2.png'
import imgPerformer1 from './Picture/img_Performer1.png'
import imgPerformer2 from './Picture/img_Performer2.png'

const PerformersProp = [
  {
    key:1,
    img:imgPerformer1,
    title:'Drumpfets',
    music:'Jazz',
    event:'No Next Event'
  },
  {
    key:2,
    img:imgPerformer2,
    title:'Sawbirds',
    music:'Indie Rock',
    event:'Next event Friday Aug 25, 10PM'
  },
]
const PlacesProp = [
  {
    key: 1,
    img: imgPlaces1,
    name: 'Lizbońska 4, Warsaw',
    title: 'Daboi Concert Hall',
    prop: 'Music'
  },
  {
    key: 2,
    img: imgPlaces2,
    name: 'Zamieniecka 8, Warsaw',
    title: 'Bright Lights Hall',
    prop: 'Gymnastics'
  },
]
const Propertys = [
  {
    key: 1,
    name: "€40-90"
  },
  {
    key: 2,
    name: "When"
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

const EventsTichket = [
  {
    key: 1,
    img: imgEvents,
    day: 'Daboi Concer… . FRIDAY AUG 24, 9PM',
    title: 'Brightlight Music Festival',
    name: 'Indie Rock',
    price: '€40 - €90'
  },
  {
    key: 2,
    img: imgEvents2,
    day: 'Dirt Traxx . WEDNESDAY AUG 22, 12PM',
    title: 'Brightbike Adventure',
    name: 'Motorcross',
    price: '€10'
  },
]
const Account = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
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
          </View>
        </View>
        <View style={{ flex: 2, paddingLeft: 20,marginTop:20 }}>
          <Text style={styles.textEvents}>Events</Text>
          <FlatList
            data={EventsTichket}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => <Events item={item} />}
          />
          <View style={{ alignItems: 'center', paddingRight: 20 }}>
            <TouchableOpacity style={styles.btnShow}>
              <Text style={styles.textShow}>
                Show all 5 events
            </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1, marginTop: 20, paddingLeft: 20 }}>
          <Text style={{ fontSize: 28, fontWeight: 'bold' }}> Places </Text>
          <FlatList
            data={PlacesProp}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => <Places item={item} />}
          />
        <View style={{ alignItems: 'center', paddingRight: 20 }}>
            <TouchableOpacity style={styles.btnShow}>
              <Text style={styles.textShow}>
                Show all 25 performers
            </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex:1,marginTop: 20, paddingLeft: 20}}>
            <Text style={{ fontSize: 28, fontWeight: 'bold' }}>Performers</Text>
        <FlatList 
          data={PerformersProp}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => <Performers item={item} />}
        />
        <View style={{ alignItems: 'center', paddingRight: 20 }}>
            <TouchableOpacity style={styles.btnShow}>
              <Text style={styles.textShow}>
                Show all 25 performers
            </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  textShow: {
    fontSize: 15,
    color: 'red'
  },
  btnShow: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#BDC0C4',
    alignItems: 'center',
    borderRadius: 8,
    height: 40,
    justifyContent: 'center',
    marginTop:20,
  },
  textEvents: {
    fontWeight: 'bold',
    fontSize: 24
  },
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
    flex: 1,
    paddingTop: 50,
    paddingLeft: 10,
    paddingRight: 10
  },
  container: {
    flex: 1,
  }
})
export default Account