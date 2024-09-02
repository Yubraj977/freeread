import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView,ScrollView } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { TextInput } from 'react-native';

export default function index() {
  let text='hellop'
  return (
    <ScrollView>
      <SafeAreaView>
        {/* Search Area */}
        <View className='flex'>
        <Ionicons name="arrow-back" size={24} color="black" />
        <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />

        </View>



        {/* Filters */}
        <View></View>



        {/* Trending topic and filter the peoples */}
        <View></View>





        {/* Category */}
        <View></View>





      </SafeAreaView>
    </ScrollView>
  )
}