import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";

// Navigation
import { useNavigation } from "@react-navigation/native";

// HeroIcons
import {
  ChevronDownIcon as ChevronDownIconOutiline,
  UserIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassCircleIcon,
} from "react-native-heroicons/outline";

// Components
import Categories from "./components/categories";
import FeaturedRow from "./components/Featured";

// Client Sanity
import client from "../sanity/sanity";

const HomeScreen = () => {
  const navigation = useNavigation();

  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    client
      .fetch(
        `
    *[_type == "featured] { 
      ...,
      restaurants[]->{
        ...,
        dishes[]->
      
    }`
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  return (
    <SafeAreaView className=" bg-white pt-1">
      {/* HEADER */}
      <View className="pt-10 flex-row pb-3 items-center mx-4 space-x-2 px-2">
        <Image
          source={{
            uri: "http://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIconOutiline size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* SEARCH */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 bg-gray-200 p-2 flex-1">
          <MagnifyingGlassCircleIcon size={28} color="gray" />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon size={28} color="#00CCBB" />
      </View>

      {/* Body */}
      <ScrollView
        className="bg-gray-100 "
        contentContainerStyle={
          {
            // paddingBottom: 100,
          }
        }
      >
        {/* Categories */}
        <Categories />

        {/* Featueres Rows*/}
      </ScrollView>
      {/* Featured */}
      <FeaturedRow
        id="123"
        title="featured"
        description="Peça a os seus companheiros"
      />
      {/* Tasty Discounts */}
      <FeaturedRow
        id="124"
        title="Offerns near you!"
        description="Peça a os seus companheiros"
      />
      {/* Offers near you */}
      <FeaturedRow
        id="1234"
        title="Tasty Discounts"
        description="Peça a os seus companheiros"
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
