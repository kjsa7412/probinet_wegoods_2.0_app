import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "react-navigation";

/// ----------
import Review from "../../screens/Review/Review";
import WriteReview from "../../screens/Review/WriteReview";

/// ----------
export default createStackNavigator(
  {
    Review: { screen: Review },
    WriteReview: { screen: WriteReview }
  },
  {
    defaultNavigationOptions: {
      headerStyle: { height: 0, borderStyle: "dotted", elevation: 0 },
      headerLeft: <View></View>
    }
  }
);
