import { View, Text, SafeAreaView, Image, TextInput } from "react-native";
import React, { useLayoutEffect } from "react";

// Navigation
import {useNavigation} from "@react-navigation/native"

// HeroIcons
import { AdjustmentsHorizontalIcon, magnifying, ChevronDownIcon as ChevronDownIconOutiline, UserIcon } from "react-native-heroicons/outline"

const HomeScreen = () => {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <SafeAreaView className="mt-7 bg-white pt-1">
        {/* HEADER */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2 px-2">
          <Image
            source={{
              uri: "http://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />

          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now!
            </Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIconOutiline size={20} color="#00CCBB" />
            </Text>
          </View>

          <UserIcon size={35} color="#00CCBB"/>
        </View>

        {/* SEARCH */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
          <View className="flex-row space-x-2 bg-gray-200 p-2 flex-1">
            {/* <MagnifyingGlassIcon size={20} color="#00CCBB" /> */}
            <TextInput 
            placeholder="Restaurants and cuisines"
            keyboardType="default"
            />            
          </View>
          {/* <AdjustmentsVerticalIcon size={20} color="#00CCBB" /> */}
        </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
