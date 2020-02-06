import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "react-navigation";

/// ----------
import Profile_Write from "../../screens/Tabs/Profile/Profile_Write";

/// ----------
export default createStackNavigator(
  {
    Profile_Write: { screen: Profile_Write }
  },
  {
    defaultNavigationOptions: {
      headerStyle: { height: 0, borderStyle: "dotted", elevation: 0 },
      headerLeft: <View></View>
    }
  }
);
