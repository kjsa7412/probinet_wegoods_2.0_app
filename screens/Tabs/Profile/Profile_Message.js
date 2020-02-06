/// Import
import React, { useState, useEffect } from "react";
import { Text, ScrollView, Image } from "react-native";
import styled from "styled-components";
import styles from "../../../styles";
import constants from "../../../constants";

// apollo
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";

/// Components
import HeaderBase from "../../../components/Header/HeaderBase";
import HeaderStyles from "../../../components/Header/HeaderStyles";
import SearchInput from "../../../components/Input/SearchInput";
import SearchMessageItem from "../../../components/Item/SearchMessageItem";

///
const BaseContainer = styled.View`
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const Profile_Message = ({ navigation }) => {
  const fromScreen = navigation.getParam("fromScreen", "");
  const [baseSize, setBaseSize] = useState({ width: 0, height: 0, x: 0, y: 0 });

  return (
    <BaseContainer
      onLayout={event => {
        setBaseSize(event.nativeEvent.layout);
      }}
    >
      {/************* 헤더 *************/}
      <HeaderBase
        leftItem={[
          {
            object: HeaderStyles.BACK,
            link: () => navigation.navigate(fromScreen)
          }
        ]}
        rightItem={[
          {
            object: HeaderStyles.PLUS,
            link: () =>
              navigation.push("ProfileSearchNavigation", {
                fromScreen: navigation.state.routeName,
                type: styles.SearchType_User
              })
          }
        ]}
      />
      <SearchInput
        onChange={() => {}}
        isWhite={false}
        cancelOnPress={() => {}}
      />
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={{ width: "80%" }}
        contentContainerStyle={{
          flexDirection: "column",
          alignItems: "flex-start"
        }}
      >
        <SearchMessageItem
          onPress={() =>
            navigation.push("ProfileMessageNavigation", {
              fromScreen: navigation.state.routeName
            })
          }
          avatar={styles.TempImage1}
          username={"David Sa"}
          lastMessage={
            "김상욱의 과학 공부 왜 세익스피어는 교양이지만 열역학 제2법칙은 교양이 아닌 걸까?"
          }
          date={"10시간전"}
        />
        <SearchMessageItem
          onPress={() => {}}
          avatar={styles.TempImage1}
          username={"David Sa"}
          lastMessage={
            "김상욱의 과학 공부 왜 세익스피어는 교양이지만 열역학 제2법칙은 교양이 아닌 걸까?"
          }
          date={"10시간전"}
        />
        <SearchMessageItem
          onPress={() => {}}
          avatar={styles.TempImage1}
          username={"David Sa"}
          lastMessage={
            "김상욱의 과학 공부 왜 세익스피어는 교양이지만 열역학 제2법칙은 교양이 아닌 걸까?"
          }
          date={"10시간전"}
        />
        <SearchMessageItem
          onPress={() => {}}
          avatar={styles.TempImage1}
          username={"David Sa"}
          lastMessage={
            "김상욱의 과학 공부 왜 세익스피어는 교양이지만 열역학 제2법칙은 교양이 아닌 걸까?"
          }
          date={"10시간전"}
        />
      </ScrollView>
    </BaseContainer>
  );
};

export default Profile_Message;
