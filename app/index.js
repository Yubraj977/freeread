import { View, Text } from 'react-native'
import CustomButton from '../components/CustomButton'
import React from 'react'
import { router } from 'expo-router'
import { ScrollView
    ,Image,StatusBar
 } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
export default function index() {
  return (
    <SafeAreaView className="bg-first h-full">
    <ScrollView
      contentContainerStyle={{
        height: "100%",
      }}
    >
      <View className="w-full flex justify-center items-center h-full px-4">
       
        <Image
         
        source={{
          uri: 'https://i.pinimg.com/564x/68/bb/1c/68bb1cac9f3cb7f46c5151f068bc5feb.jpg',
        }}
          className="max-w-[380px] w-full h-[400px] rounded-lg 600"
          resizeMode="contain"
        />

        <View className="relative mt-5">
          <Text className="text-3xl text-white font-bold text-center">
            Discover New{"\n"}
            news with{" "}
            <Text className="text-secondary-200">FreeRead</Text>
          </Text>

          <Image
            source={''}
            className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
            resizeMode="contain"
          />
        </View>

        <Text className="text-sm font-pregular text-gray-100 mt-2 text-center">
          Where world is changing Dailly: we decided to make every news easy  & fast access
        </Text>

        <CustomButton
          title="Start Reading"
          handlePress={() => router.push("/home")}
          containerStyles="w-full mt-7"
        />
      </View>
    </ScrollView>

    <StatusBar backgroundColor="#161622" style="light" />
  </SafeAreaView>
  )
}