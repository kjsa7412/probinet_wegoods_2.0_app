/// Import
import React, { useState, useEffect } from "react";
import { Text, ScrollView, Image, View } from "react-native";
import Swiper from "react-native-swiper";
import styled from "styled-components";
import styles from "../../../styles";
import constants from "../../../constants";

// apollo
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";

/// Components
import HeaderBase from "../../../components/Header/HeaderBase";
import HeaderStyles from "../../../components/Header/HeaderStyles";
import WordButton from "../../../components/Button/WordButton";
import RectangleButton from "../../../components/Button/RectangleButton";
import CommonInput from "../../../components/Input/CommonInput";
import CancelButton_Absolute from "../../../components/Button/CancelButton_Absolute";

///
const BaseContainer = styled.View`
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const CoverContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${constants.width * 0.9};
  height: ${constants.width * 0.9};
  background-color: ${styles.redColor};
`;

///
const Cover = styled.Image`
  width: 100%;
  height: 100%;
`;

const Post_Insert = ({ navigation }) => {
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
            link: () => navigation.goBack()
          }
        ]}
      />
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={{ width: "90%" }}
        contentContainerStyle={{
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <CoverContainer>
          <Swiper loop={false} activeDotColor={"#FFFFFF"}>
            <View key={1}>
              <Cover source={{ uri: styles.TempImage1 }} />
              <CancelButton_Absolute
                onPress={() => {}}
                width={styles.headerHeight}
              />
            </View>
          </Swiper>
        </CoverContainer>
        <RectangleButton
          onPress={() => navigation.navigate("PhotoNavigation")}
          text={"사진 등록"}
        />
        <CommonInput
          onChange={() => {}}
          title={"상품명"}
          placeholder={"상품명"}
          fontSize={20}
          width={constants.width * 0.9}
        />
        <CommonInput
          onChange={() => {}}
          title={"사진 저작권자"}
          placeholder={"사진 저작권자"}
          fontSize={15}
          width={constants.width * 0.9}
        />
        <CommonInput
          onChange={() => {}}
          title={"소개"}
          placeholder={"소개"}
          fontSize={15}
          multiline={true}
          returnKeyType={"next"}
          width={constants.width * 0.9}
        />
        <WordButton onPress={() => {}} text={"작성하기"} />
      </ScrollView>
    </BaseContainer>
  );
};

export default Post_Insert;
