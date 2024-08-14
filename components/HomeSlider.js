import { View, Text } from 'react-native'
import React from 'react'
import { ImageBackground, Image } from 'react-native'
export default function HomeSlider() {
  return (
    <View className='h-56 w-full rounded-2xl object-cover relative' >
      <Image
        className='h-full w-full rounded-xl'
        source={{
          uri: 'https://images.unsplash.com/photo-1722218530661-19e1c5b37dcc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
        resizeMode='cover'
      />
      <View className='absolute bottom-1'>
        <View className='flex flex-row items-center gap-4 px-2 '>
            
        <Image
         
         source={{
           uri: 'https://i.pinimg.com/564x/68/bb/1c/68bb1cac9f3cb7f46c5151f068bc5feb.jpg',
         }}
           className="h-8 w-8 rounded-full 600"
           resizeMode="cover"
         />
        <Text className='text-white  font-bold'>
          CNN Nepal
        </Text>

        </View >
        <Text className=' text-white font-bold text-sm mt-1 '>
          Planned Protests Pass Without Incident - Police monitored over 100 planned protests.
        </Text>
      </View>
    </View>
  )
}