/// Import
import React, { useState, useEffect } from "react";
import { ScrollView, Image } from "react-native";
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

///
const Touchable = styled.TouchableOpacity``;

///
const BaseContainer = styled.View`
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text`
  color: ${props => (props.fontcolor ? props.fontcolor : styles.blackColor)};
  font-size: ${props => (props.fontsize ? props.fontsize : 1)};
  font-family: ${props =>
    props.fontstyle ? props.fontstyle : "NanumBarunGothicLight"};
  margin-top: ${props => (props.marginTop ? props.marginTop : 0)};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : 0)};
`;

/// AlramItem
const AlramContainer = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: ${constants.margin03};
  margin-bottom: ${constants.margin03};
`;

const PhotoContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Avatar = styled.Image`
  width: ${styles.Avatar1};
  height: ${styles.Avatar1};
  border-radius: ${styles.Avatar1 / 2};
  margin-right: ${constants.margin02};
`;

const Photo = styled.Image`
  width: ${styles.Avatar1};
  height: ${styles.Avatar1};
  margin-right: ${constants.margin02};
`;

const Profile_Alram = ({ navigation }) => {
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
        style={{ width: "90%" }}
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <AlramContainer>
          <Text fontsize={20} fontstyle={"NanumBarunGothicBold"}>
            2019년 12월 30일
          </Text>
          <Text
            fontsize={15}
            marginTop={constants.margin01}
            marginBottom={constants.margin01}
          >
            김상욱의 과학 공부 왜 세익스피어는 교양이지만 열역학 제2법칙은
            교양이 아닌 걸까?
          </Text>
          <PhotoContainer>
            <Touchable>
              <Photo source={{ uri: styles.TempImage1 }} />
            </Touchable>
            <Touchable>
              <Avatar source={{ uri: styles.TempImage2 }} />
            </Touchable>
          </PhotoContainer>
        </AlramContainer>

        <AlramContainer>
          <Text fontsize={20} fontstyle={"NanumBarunGothicBold"}>
            2019년 12월 30일
          </Text>
          <Text
            fontsize={15}
            marginTop={constants.margin01}
            marginBottom={constants.margin01}
          >
            김상욱의 과학 공부 왜 세익스피어는 교양이지만 열역학 제2법칙은
            교양이 아닌 걸까?
          </Text>
          <PhotoContainer>
            <Touchable>
              <Photo source={{ uri: styles.TempImage1 }} />
            </Touchable>
            <Touchable>
              <Avatar source={{ uri: styles.TempImage2 }} />
            </Touchable>
          </PhotoContainer>
        </AlramContainer>

        <AlramContainer>
          <Text fontsize={20} fontstyle={"NanumBarunGothicBold"}>
            2019년 12월 30일
          </Text>
          <Text
            fontsize={15}
            marginTop={constants.margin01}
            marginBottom={constants.margin01}
          >
            김상욱의 과학 공부 왜 세익스피어는 교양이지만 열역학 제2법칙은
            교양이 아닌 걸까?
          </Text>
          <PhotoContainer>
            <Touchable>
              <Photo source={{ uri: styles.TempImage1 }} />
            </Touchable>
            <Touchable>
              <Avatar source={{ uri: styles.TempImage2 }} />
            </Touchable>
          </PhotoContainer>
        </AlramContainer>

        <AlramContainer>
          <Text fontsize={20} fontstyle={"NanumBarunGothicBold"}>
            2019년 12월 30일
          </Text>
          <Text
            fontsize={15}
            marginTop={constants.margin01}
            marginBottom={constants.margin01}
          >
            김상욱의 과학 공부 왜 세익스피어는 교양이지만 열역학 제2법칙은
            교양이 아닌 걸까?
          </Text>
          <PhotoContainer>
            <Touchable>
              <Photo source={{ uri: styles.TempImage1 }} />
            </Touchable>
            <Touchable>
              <Avatar source={{ uri: styles.TempImage2 }} />
            </Touchable>
          </PhotoContainer>
        </AlramContainer>

        <AlramContainer>
          <Text fontsize={20} fontstyle={"NanumBarunGothicBold"}>
            2019년 12월 30일
          </Text>
          <Text
            fontsize={15}
            marginTop={constants.margin01}
            marginBottom={constants.margin01}
          >
            김상욱의 과학 공부 왜 세익스피어는 교양이지만 열역학 제2법칙은
            교양이 아닌 걸까?
          </Text>
          <PhotoContainer>
            <Touchable>
              <Photo source={{ uri: styles.TempImage1 }} />
            </Touchable>
            <Touchable>
              <Avatar source={{ uri: styles.TempImage2 }} />
            </Touchable>
          </PhotoContainer>
        </AlramContainer>

        <AlramContainer>
          <Text fontsize={20} fontstyle={"NanumBarunGothicBold"}>
            2019년 12월 30일
          </Text>
          <Text
            fontsize={15}
            marginTop={constants.margin01}
            marginBottom={constants.margin01}
          >
            김상욱의 과학 공부 왜 세익스피어는 교양이지만 열역학 제2법칙은
            교양이 아닌 걸까?
          </Text>
          <PhotoContainer>
            <Touchable>
              <Photo source={{ uri: styles.TempImage1 }} />
            </Touchable>
            <Touchable>
              <Avatar source={{ uri: styles.TempImage2 }} />
            </Touchable>
          </PhotoContainer>
        </AlramContainer>
      </ScrollView>
    </BaseContainer>
  );
};

export default Profile_Alram;
