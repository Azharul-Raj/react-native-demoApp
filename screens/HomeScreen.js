import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'
import { HeroImage } from '../assets';

export default function HomeScreen() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown:false
    })
  }, [])
  //className=""
  return (
    <SafeAreaView className="flex flex-1 mt-10 relative">
      {/* first section */}
      <View className="mx-6 flex-row items-center space-x-3">
        <View className="p-4 h-16 w-26 bg-gray-900 rounded-full">
          <Text className="font-semibold text-cyan-500 text-2xl uppercase">Go</Text>
        </View>
          <Text className="text-gray-900 font-semibold text-3xl">Travel</Text>
      </View>
      {/* second section */}
      <View className="space-y-3 mt-5 mx-6">
        <Text className="text-4xl text-gray-900">Enjoy Your Trip</Text>
        <Text className="text-3xl font-bold text-cyan-500">With Relaxation</Text>
        <Text className="space-x-2 text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dignissimos.</Text>
      </View>
      {/* third section */}
      <View className="h-80 w-80 bg-cyan-500 rounded-full absolute bottom-36 -right-36"></View>
      <View className="h-72 w-72 bg-orange-500 rounded-full absolute -bottom-16 -left-32"></View>
      <View className="flex-1 relative justify-center items-center">
        <Image source={HeroImage} className="h-[470px] w-full mt-[70px] object-cover" />
      <TouchableOpacity className="h-28 w-28 absolute bottom-28 border-l-2 border-t-4 border-r-2 border-cyan-400 rounded-full justify-center items-center">
        <Animatable.View animation="pulse" easing="ease-in-out" iterationCount="infinite" className="bg-cyan-400 h-24 w-24 rounded-full justify-center items-center">
          <Text className="font-semibold text-4xl text-gray-100">GO</Text>
        </Animatable.View>
          </TouchableOpacity>
      </View>
      {/* final bottom */}
    </SafeAreaView>
  )
}