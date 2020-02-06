import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "react-navigation";

/// ----------
import Support from "../../../screens/Tabs/Support/Support";
/// Common - Goods
import Goods_Detail from "../../../screens/Tabs/Goods/Goods_Detail";
import Goods_List from "../../../screens/Tabs/Goods/Goods_List";
/// Common - Post
import Post_Detail from "../../../screens/Tabs/Post/Post_Detail";
import Post_List from "../../../screens/Tabs/Post/Post_List";
/// Common - Support
import Support_Detail from "../../../screens/Tabs/Support/Support_Detail";
import Support_List from "../../../screens/Tabs/Support/Support_List";
import Support_Status_Artist from "../../../screens/Tabs/Support/Support_Status_Artist";
import Support_Status_Date from "../../../screens/Tabs/Support/Support_Status_Date";
import Support_Message from "../../../screens/Tabs/Support/Support_Message";
import Support_Result from "../../../screens/Tabs/Support/Support_Result";
import Support_User_Status_Artist from "../../../screens/Tabs/Support/Support_User_Status_Artist";
import Support_User_Status_Date from "../../../screens/Tabs/Support/Support_User_Status_Date";
/// Common - Profile
import Profile_News from "../../../screens/Tabs/Profile/Profile_News";
import Profile_Auth from "../../../screens/Tabs/Profile/Profile_Auth";
import Profile_User from "../../../screens/Tabs/Profile/Profile_User";

/// ------------------------

/// ----------
export default () =>
  createStackNavigator(
    {
      Support: { screen: Support },
      /// Common - Goods
      Goods_Detail: { screen: Goods_Detail },
      Goods_List: { screen: Goods_List },
      /// Common - Post
      Post_Detail: { screen: Post_Detail },
      Post_List: { screen: Post_List },
      /// Common - Support
      Support_Detail: { screen: Support_Detail },
      Support_List: { screen: Support_List },
      Support_Status_Artist: { screen: Support_Status_Artist },
      Support_Status_Date: { screen: Support_Status_Date },
      Support_Message: { screen: Support_Message },
      Support_Result: { screen: Support_Result },
      Support_User_Status_Artist: { screen: Support_User_Status_Artist },
      Support_User_Status_Date: { screen: Support_User_Status_Date },
      /// Common - Profile
      Profile_News: { screen: Profile_News },
      Profile_Auth: { screen: Profile_Auth },
      Profile_User: { screen: Profile_User }

      /// ------------------------
    },
    {
      defaultNavigationOptions: {
        headerStyle: { height: 0, borderStyle: "dotted", elevation: 0 },
        headerLeft: <View></View>
      }
    }
  );
