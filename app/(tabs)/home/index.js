import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import HomeSlider from '../../../components/HomeSlider';
import { ScrollView } from 'react-native';
import Octicons from '@expo/vector-icons/Octicons';
import NewsView from '../../../components/NewsView';

export default function index() {
    return (
        <SafeAreaView className='px-2 mt-2'>
            {/* First top view for the app -------easy menus-------- */}
            <View className='flex justify-between flex-row '>
                <View>
                    <View className=' border-4 border-neutral-100 p-2 rounded-full' >
                        <Entypo name="menu" size={24} color="black" />
                    </View>
                </View>
                <View className='flex flex-row gap-4 bg-neutral-100 rounded-full px-4'>
                    <View className=' p-2 border-slate-100  rounded-full'>
                        <AntDesign name="search1" size={24} color="black" />
                    </View>
                    <View className='  border-slate-100 p-2  rounded-full'>
                        <AntDesign name="notification" size={24} color="black" />
                    </View>
                </View>

            </View>

            {/* -------Slider View--------- */}
            <View className='mt-2'>
                <View className='px-2 flex flex-row justify-between items-center'>
                    <Text className='font-bold text-2xl'>Breaking News </Text>
                    <Text className='font-semibold'>Show more</Text>
                </View>
                <View className='mt-2'>

                    <HomeSlider />
                </View>





            </View>

            {/* Filters sliders */}

            <ScrollView
                className='pt-4 flex gap-5 flex-row '

                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <View className='bg-blue-500 px-4  py-2  rounded-xl'>
                    <Text className='font-semibold text-white text-lg'>
                        All
                    </Text>
                </View>



                <View className='bg-neutral-300  rounded-xl flex flex-row  px-4 py-2'>
                    <Octicons name="law" size={24} color="white" />
                    <Text className=' text-white font-bold text-center ml-2 text-sm'>
                        politics
                    </Text>
                </View>



                <View className='bg-neutral-300  rounded-xl flex flex-row  px-4 py-2'>

                    <AntDesign name="book" size={24} color="white" />
                    <Text className=' text-white font-bold text-center ml-2 text-sm'>
                        Education
                    </Text>
                </View>


                <View className='bg-neutral-300  rounded-xl flex flex-row  px-4 py-2'>

                    <AntDesign name="book" size={24} color="white" />
                    <Text className=' text-white font-bold text-center ml-2 text-sm'>
                        Education
                    </Text>
                </View>



                <View className='bg-neutral-300  rounded-xl flex flex-row  px-4 py-2'>

                    <AntDesign name="book" size={24} color="white" />
                    <Text className=' text-white font-bold text-center ml-2 text-sm'>
                        Education
                    </Text>
                </View>


                <View className='bg-neutral-300  rounded-xl flex flex-row  px-4 py-2'>

                    <AntDesign name="book" size={24} color="white" />
                    <Text className=' text-white font-bold text-center ml-2 text-sm'>
                        Education
                    </Text>
                </View>


            </ScrollView>
            <View className='px-[0.3rem] flex flex-row justify-between items-center mt-2'>
                <Text className='font-bold text-lg'>Recommanded for you </Text>
                <Text className='font-semibold'>Show more</Text>
            </View>

            {/*  For the news view section*/}
            <View className='mt-2'>
                <NewsView />
            </View>

        </SafeAreaView>
    )
}