import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "react-navigation";

/// ----------
import Goods_Payment from "../../screens/Tabs/Goods/Goods_Payment";

/// ----------
export default createStackNavigator(
  {
    Goods_Payment: { screen: Goods_Payment }
  },
  {
    defaultNavigationOptions: {
      headerStyle: { height: 0, borderStyle: "dotted", elevation: 0 },
      headerLeft: <View></View>
    }
  }
);
