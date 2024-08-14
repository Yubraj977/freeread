import { View, Text } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { AntDesign } from '@expo/vector-icons';
import React from 'react'
import { Tabs,Redirect } from 'expo-router'
export default function TabsLayout() {
  return (
   <>
   <Tabs screenOptions={{
    headerShown:false,
    tabBarActiveTintColor: '#1acd81',
    tabBarStyle:{
        backgroundColor:'#effef7',
        borderTopWidth:4,
        borderTopColor:'#effef7'
    }
    }}>
    <Tabs.Screen name='home/index' options={{
        title:"Home",
        
        
        tabBarIcon:({color,focused})=> (
            <AntDesign name="home" size={24} color={color} />
        )
        }}/>
        {/* <Tabs.Screen name='home/productdetials/index' options={{href:null}}/> */}
         <Tabs.Screen name='discover/index' options={{
        title:"Discover",
  
        tabBarIcon:({color,focused})=> (
            <AntDesign name="find" size={24} color={color} />
            // <FontAwesome size={28} name="shopping-cart" color={color} />
        )
        
        }}/>
         <Tabs.Screen name='saved/index' options={{
        title:"saved",
      
        tabBarIcon:({color,focused})=> (
            <FontAwesome name="save" size={24} color={color} />
        )
        
        }}/>
    <Tabs.Screen name='profile/index' options={{
        title:"Profile",
      
        tabBarIcon:({color,focused})=> (
            <AntDesign name="user" size={24} color={color} />
        )
        
        }}/>
        
   </Tabs>
   </>
  )
}