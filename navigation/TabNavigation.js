import React from "react";
import { View, Platform } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

/// ----------
import NavIcon from "../components/NavIcon";
import GoodsStackFactory from "./StackFactory/TabStackFactory/GoodsStackFactory";
import PostStackFactory from "./StackFactory/TabStackFactory/PostStackFactory";
import ProfileStackFactory from "./StackFactory/TabStackFactory/ProfileStackFactory";
import SupportStackFactory from "./StackFactory/TabStackFactory/SupportStackFactory";

/// ----------;

/// ----------
const stackFactory = (initialRoute, customConfig) =>
  createStackNavigator(
    {
      InitialRoute: {
        screen: initialRoute,
        navigationOptions: {
          ...customConfig
        }
      }
    },
    {
      defaultNavigationOptions: {
        headerStyle: { height: 0, borderStyle: "dotted", elevation: 0 },
        headerLeft: <View></View>
      }
    }
  );

export default createBottomTabNavigator(
  {
    Goods: {
      screen: GoodsStackFactory(),
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <NavIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-home" : "md-home"}
          />
        )
      }
    },

    Post: {
      screen: PostStackFactory(),
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <NavIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-star" : "md-star"}
          />
        )
      }
    },
    Support: {
      screen: SupportStackFactory(),
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <NavIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-leaf" : "md-leaf"}
          />
        )
      }
    },

    Profile: {
      screen: ProfileStackFactory(),
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <NavIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-person" : "md-person"}
          />
        )
      }
    }
  },
  {
    initialRouteName: "Goods",
    tabBarOptions: {
      showLabel: false,
      style: {
        height: 45,
        backgroundColor: "#FFFFFF",
        borderStyle: "dotted",
        borderTopWidth: 0
      }
    }
  }
);
