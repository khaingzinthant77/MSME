import React from "react";
import { Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import DiscountShop from "./screens/DiscountShop";
import AboutUs from "./screens/AboutUs";
import News from "./screens/News";
import Setting from "./screens/Setting";
import { Entypo, Ionicons, Feather } from "@expo/vector-icons";

export default createAppContainer(
  createBottomTabNavigator(
    {
      DiscountShop: {
        screen: DiscountShop,
        navigationOptions: () => ({
          title: "Discount Shop",
          tabBarIcon: ({ focused, tintColor }) => (
            <Entypo name="shop" size={25} color={tintColor} />
          )
        })
      },
      AboutUs: {
        screen: AboutUs,
        navigationOptions: () => ({
          title: "About Us",
          tabBarIcon: ({ focused, tintColor }) => (
            <Ionicons name="md-people" size={25} color={tintColor} />
          )
        })
      },
      News: {
        screen: News,
        navigationOptions: () => ({
          title: "News",
          tabBarIcon: ({ focused, tintColor }) => (
            <Entypo name="news" size={25} color={tintColor} />
          )
        })
      },
      Setting: {
        screen: Setting,
        navigationOptions: () => ({
          title: "Setting",
          tabBarIcon: ({ focused, tintColor }) => (
            <Feather name="settings" size={25} color={tintColor} />
          )
        })
      }
    },
    {
      initialRouteName: "DiscountShop",
      tabBarOptions: {
        activeTintColor: "black",
        inactiveTintColor: "white",
        style: {
          height: 50,
          backgroundColor: "#3c3"
        },
        labelStyle: {
          fontSize: 12,
          fontFamily: "Dosis-Bold"
        }
      }
    }
  )
);
