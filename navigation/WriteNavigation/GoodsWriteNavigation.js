import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "react-navigation";

/// ----------
import Goods_Write from "../../screens/Tabs/Goods/Goods_Write";
import Goods_Write_Form from "../../screens/Tabs/Goods/Goods_Write_Form";
import Goods_Insert_Product from "../../screens/Tabs/Goods/Goods_Insert_Product";
import Support_Insert from "../../screens/Tabs/Support/Support_Insert";
import Support_List from "../../screens/Tabs/Support/Support_List";

/// ----------
export default createStackNavigator(
  {
    Goods_Write: { screen: Goods_Write },
    Goods_Write_Form: { screen: Goods_Write_Form },
    Goods_Insert_Product: { screen: Goods_Insert_Product },
    Support_Insert: { screen: Support_Insert },
    Support_List: { screen: Support_List }
  },
  {
    defaultNavigationOptions: {
      headerStyle: { height: 0, borderStyle: "dotted", elevation: 0 },
      headerLeft: <View></View>
    }
  }
);
