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
import CommonInput from "../../../components/Input/CommonInput";
import CancelButton_Absolute from "../../../components/Button/CancelButton_Absolute";
import CancelButton from "../../../components/Button/CancelButton";
import WordButton from "../../../components/Button/WordButton";
import RectangleButton from "../../../components/Button/RectangleButton";
import ArtistName from "../../../components/Name/ArtistName";

///
const BaseContainer = styled.View`
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const CoverContainer = styled.View`
  flex-direction: column;
  width: ${constants.width};
  height: ${constants.width};
`;

const ArtistContainer = styled.View`
  flex-direction: column;
  width: 90%;
`;

const ArtistItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

///
const Title = styled.Text`
  font-size: 15;
  font-family: NanumBarunGothicLight;
  margin-bottom: ${constants.margin01};
`;

const Cover = styled.Image`
  width: 100%;
  height: 100%;
`;

const Post_Write = ({ navigation }) => {
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
      />
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
        contentContainerStyle={{
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        {/* 표지 */}
        <CoverContainer>
          <Cover source={{ uri: styles.TempImage1 }} />
          <CancelButton_Absolute
            onPress={() => {}}
            width={styles.headerHeight}
          />
        </CoverContainer>

        <RectangleButton
          onPress={() => navigation.navigate("PhotoNavigation")}
          text={"표지 등록"}
        />

        {/* 입력창 */}
        <CommonInput
          onChange={() => {}}
          title={"제목"}
          placeholder={"제목"}
          fontSize={50}
          multiline={true}
          returnKeyType={"next"}
          width={constants.width * 0.9}
        />

        {/* 아티스트 입력창 */}
        <ArtistContainer>
          <Title>아티스트</Title>

          <ArtistItemContainer key={1}>
            <ArtistName
              onChange={() => {}}
              artist={"방탄소년단"}
              group={"방탄소년단"}
              textColor={styles.blackColor}
              textSize={"25"}
              margin={constants.margin01}
            />
            <CancelButton onPress={() => {}} width={"25"} />
          </ArtistItemContainer>

          <ArtistItemContainer key={2}>
            <ArtistName
              onChange={() => {}}
              artist={"방탄소년단"}
              group={"방탄소년단"}
              textColor={styles.blackColor}
              textSize={"25"}
              margin={constants.margin01}
            />
            <CancelButton onPress={() => {}} width={"25"} />
          </ArtistItemContainer>
        </ArtistContainer>

        {/* 아티스트 선택 */}
        <RectangleButton
          onPress={() =>
            navigation.push("GoodsSearchNavigation", {
              fromScreen: navigation.state.routeName,
              type: styles.SearchType_Artist
            })
          }
          text={"아티스트 선택"}
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

        <RectangleButton
          onPress={() => navigation.push("Post_Insert")}
          text={"글작성"}
        />
        <WordButton onPress={() => {}} text={"게시하기"} />
      </ScrollView>
    </BaseContainer>
  );
};

export default Post_Write;
