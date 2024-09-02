import { View, Text } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

export default function CustomNavButton({icon,iconcolor,text,description,}) {
  return (
    <View className='flex-row gap-3 items-center '>
   
  {/* Left View */}
<View className='left bg-purple-300  w-8 h-8 rounded-full flex items-center justify-center'>
{/* <AntDesign name={icon} size={24} color="black" /> */}
{icon}
</View>

<View className='right'>
<Text className='font-bold text-lg'>
    {text}
</Text>
<Text className='font-bold'>{description}</Text>
</View>
    </View>
  )
}