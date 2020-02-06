import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "react-navigation";

/// ----------
import Post_Write from "../../screens/Tabs/Post/Post_Write";
import Post_Insert from "../../screens/Tabs/Post/Post_Insert";

/// ----------
export default createStackNavigator(
  {
    Post_Write: { screen: Post_Write },
    Post_Insert: { screen: Post_Insert }
  },
  {
    defaultNavigationOptions: {
      headerStyle: { height: 0, borderStyle: "dotted", elevation: 0 },
      headerLeft: <View></View>
    }
  }
);
