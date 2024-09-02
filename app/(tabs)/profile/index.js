import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView, SafeAreaView } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Image } from 'react-native';
import CustomNavButton from '../../../components/CustomNavButton';
import Feather from '@expo/vector-icons/Feather';
// import MaterialIcons from '@expo/vector-icons/MaterialIcons';



export default function index() {
  return (
    <SafeAreaView>
      <ScrollView className='pt-4 px-4'>

        {/* Top view with the back button */}
        <View className="flex flex-row justify-between items-center">
          <MaterialIcons name="arrow-back-ios" size={24} color="black" />
          <Text className='font-bold text-xl'>Profile</Text>
          <View>
            <AntDesign name="edit" size={24} color="black" />
            <Text>Edit</Text>
          </View>
        </View>
        {/* Profile image section */}
        <View className='justify-center items-center mt-4'>
          <Image

            source={{
              uri: 'https://images.unsplash.com/photo-1514161955277-4ea47eef2ff9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}
            className="h-28 w-28 rounded-full 600"
            resizeMode="cover"
          />
          <Text className='font-bold text-2xl capitalize'>
            Mustafa anjum bugati
          </Text>
          <Text>real reader</Text>

        </View>

        

        {/* For the section of the sliders for most common things he do */}
        <View className='bg-yellow-600 h-48 w-full rounded-2xl '>

        </View>


        {/* For the Account |Settings */}
        <Text className='font-bold text-xl mt-3 '>Account Settings</Text>
        <View className='mt-2 flex flex- '>
          <CustomNavButton text={'Your profile'} description={'visit and edit your profile'} icon={<AntDesign name="user" size={24} color="black" />}/>
          {/* <CustomNavButton text={'Your profile'} description={'visit and edit your profile'} icon={<Feather name="sun" size={24} color="black" />}/> */}

          

        </View>


        <Text className='font-bold text-xl mt-3 '>App Settings</Text>
        <View className=' gap-12 border border-red-700 '>
         <View className=''>
          <CustomNavButton text={'Display preference'} description={'Adjust your display'} icon={<Feather name="sun" size={24} color="black" />}/>
          <MaterialIcons name="navigate-next" size={24} color="black" />
          </View>
          <CustomNavButton text={'Display preference'} description={'Adjust your display'} icon={<Feather name="sun" size={24} color="black" />} />

          

        </View>



        <View>


        </View>

      </ScrollView>
    </SafeAreaView>
  )
}