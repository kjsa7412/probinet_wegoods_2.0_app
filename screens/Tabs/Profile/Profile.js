/// Import
import React, { useState, useEffect } from "react";
import { Text, ScrollView, Image } from "react-native";
import styles from "../../../styles";
import constants from "../../../constants";
import styled from "styled-components";
import { calcThousandStr } from "../../../func/calc/numberCalc";
import typeDef from "../../../typeDef";

// apollo
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";

/// Components
import HeaderBase from "../../../components/Header/HeaderBase";
import HeaderStyles from "../../../components/Header/HeaderStyles";
import TopProfile from "../../../components/Profile/TopProfile";
import MiddleProfile from "../../../components/Profile/MiddleProfile";
import BottomProfile from "../../../components/Profile/BottomProfile";
import ProbinetBottom from "../../../components/Bottom/ProbinetBottom";
import WordButton from "../../../components/Button/WordButton";
import Loader from "../../../components/Loader";

/// Styled Components
const BaseContainer = styled.View`
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

/// Query
const SEE_MY_PROFILE = gql`
  {
    me {
      id
      username
      avatar
      bio
      background
      goodses {
        id
        files
      }
      posts {
        id
        files
      }
      news {
        id
        files
      }

      userActiveType
      uncheckedAlarmsCount
      goodsesCount
      reviewsCount
      postsCount
      newsCount
      certificationsCount
      supportHistoriesCount
      buyCount
      ordersCount
      followingCount
      followersCount
    }
  }
`;

const Profile = ({ navigation }) => {
  /// ------------------------ state
  /// size
  const [baseSize, setBaseSize] = useState({ width: 0, height: 0, x: 0, y: 0 });

  /// ------------------------ mutation
  let myProfile = useQuery(SEE_MY_PROFILE, {
    fetchPolicy: "network-only"
  });

  return (
    <BaseContainer
      onLayout={event => {
        setBaseSize(event.nativeEvent.layout);
      }}
    >
      <HeaderBase
        leftItem={[
          {
            object: HeaderStyles.PLUS,
            link: () =>
              navigation.push("ProfileWriteNavigation", {
                fromScreen: navigation.state.routeName
              })
          }
        ]}
        rightItem={[
          {
            object: HeaderStyles.SETTING,
            link: () =>
              navigation.push("Profile_Setting", {
                fromScreen: navigation.state.routeName
              })
          }
        ]}
      />

      {myProfile.loading ? (
        <Loader />
      ) : (
        <ScrollView>
          <TopProfile
            cover={myProfile.data.me.background}
            avatar={myProfile.data.me.avatar}
            username={myProfile.data.me.username}
            bio={myProfile.data.me.bio}
          />
          <WordButton
            onPress={() =>
              navigation.push("Profile_Message", {
                fromScreen: navigation.state.routeName
              })
            }
            text={"메시지"}
          />
          <MiddleProfile
            navigation={navigation}
            isMe={true}
            isCreator={
              myProfile.data.me.userActiveType ===
                typeDef.USER_ACTIVETYPE_CREATOR ||
              myProfile.data.me.userActiveType === typeDef.USER_ACTIVETYPE_ADMIN
                ? true
                : false
            }
            follower={calcThousandStr(myProfile.data.me.followersCount)}
            following={calcThousandStr(myProfile.data.me.followingCount)}
            support={calcThousandStr(myProfile.data.me.supportHistoriesCount)}
            auth={calcThousandStr(myProfile.data.me.certificationsCount)}
            alarm={calcThousandStr(myProfile.data.me.uncheckedAlarmsCount)}
            buy={calcThousandStr(myProfile.data.me.buyCount)}
            order={calcThousandStr(myProfile.data.me.ordersCount)}
            after={calcThousandStr(myProfile.data.me.reviewsCount)}
          />
          <BottomProfile
            navigation={navigation}
            isCreator={
              myProfile.data.me.userActiveType ===
                typeDef.USER_ACTIVETYPE_CREATOR ||
              myProfile.data.me.userActiveType === typeDef.USER_ACTIVETYPE_ADMIN
                ? true
                : false
            }
            newsNumber={calcThousandStr(myProfile.data.me.newsCount)}
            goodsNumber={calcThousandStr(myProfile.data.me.goodsesCount)}
            postNumber={calcThousandStr(myProfile.data.me.postsCount)}
            news={myProfile.data.me.news}
            goodses={myProfile.data.me.goodses}
            posts={myProfile.data.me.posts}
          />
          <ProbinetBottom />
        </ScrollView>
      )}
    </BaseContainer>
  );
};

export default Profile;
