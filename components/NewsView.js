import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
export default function NewsView() {
  return (
    <View className='flex flex-row gap-2 px-2 mt-2'>
      {/* Left View of the image */}
      <View >
      <Image
         
         source={{
           uri: 'https://i.pinimg.com/564x/68/bb/1c/68bb1cac9f3cb7f46c5151f068bc5feb.jpg',
         }}
           className="h-28 w-28 rounded-lg 600"
           resizeMode="cover"
         />
      </View>
{/* Right view for the file */}
      <View className='flex justify-between pb-2 pt-1 pr-4'>
         <View className='flex flex-row gap-1 items-center'> 
          
          <View>
          <Image
         
         source={{
           uri: 'https://i.pinimg.com/564x/68/bb/1c/68bb1cac9f3cb7f46c5151f068bc5feb.jpg',
         }}
           className="h-4 w-4 rounded-full 600"
           resizeMode="cover"
         />
          </View>
          <Text className='font-bold opacity-60'>writer the </Text>
          <Text className='font-bold opacity-30'>sports</Text>
          
          </View>
         <View><Text className='font-bold text-black text-md '>Fifa accnounce new regulations to  tackle rasigm in the footbal   tackle rasigm in the footbal tackle rasigm in the footbal tackle rasigm in the footbal</Text></View>
         <View><Text className='opacity-60'>Feb 8 2023</Text></View>
      </View>
    </View>
  )
}