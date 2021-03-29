import React from 'react'
import {Image} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import iconHome from './Picture/iconHome.png'
import iconSearch from './Picture/iconSearch.png'
import iconTichket from './Picture/iconTichket.png'
import iconAccount from './Picture/iconAccount.png'
import Home from './Home'
import Search from './Search'
import Tichket from './Tichket'
import Account from './Account'
import Results from './Results'
const Tab = createBottomTabNavigator();

const Navigation  = () => {
    return (
      
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false
        }}
      >
        
        
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={iconHome} />
          ),
        }} />
        <Tab.Screen
        name="Search" 
        component={Search} 
        options={{
        tabBarIcon: ({ color, size }) => (
          <Image source={iconSearch} />
        ),
      }} 
      />
      <Tab.Screen
        name="Tichket" 
        component={Tichket} 
        options={{
        tabBarIcon: ({ color, size }) => (
          <Image source={iconTichket} />
        ),
      }} 
      />
      <Tab.Screen
        name="Account" 
        component={Account} 
        options={{
        tabBarIcon: ({ color, size }) => (
          <Image source={iconAccount} />
        ),
      }} 
      />
      </Tab.Navigator>
      
    )
}
export default Navigation