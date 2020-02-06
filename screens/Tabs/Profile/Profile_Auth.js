/// Import
import React, { useState, useEffect } from "react";
import { ScrollView, Image, View } from "react-native";
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
const BaseContainer = styled.View`
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const ContentsContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: ${constants.margin10};
  margin-bottom: ${constants.margin10};
  padding-top: ${constants.margin05};
  padding-bottom: ${constants.margin05};
  background-color: ${styles.whiteColor};
`;

const ContentsTopContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: ${constants.margin03};
`;

const ContentsBottomContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
`;

const NameContainer = styled.View`
  flex-direction: row;
  justify-content: ${props => props.justify};
  align-items: center;
  width: ${props => props.width};
`;

///
const Line = styled.View`
  border: 0.5px solid
  border-color: ${props =>
    props.lineColor ? props.lineColor : styles.darkGreyColor};
  border-top-width: 0.5;
  height: 100%;
  position: absolute;
`;

const Text = styled.Text`
  text-align: center;
  font-size: ${props => props.fontsize};
  color: ${props => (props.fontcolor ? props.fontcolor : styles.blackColor)};
  font-family: ${props =>
    props.fontstyle ? props.fontstyle : "NanumBarunGothicLight"};
  margin-top: ${props => (props.marginTop ? props.marginTop : 0)};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : 0)};
`;

const Profile_Auth = ({ navigation }) => {
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
        <Line />

        {/* 리스트 */}
        <ContentsContainer>
          <ContentsTopContainer>
            <NameContainer width={"100%"} justify={"center"}>
              <Text fontsize={50} fontstyle={"NanumBarunGothicBold"}>
                03
              </Text>
            </NameContainer>
          </ContentsTopContainer>
          <ContentsBottomContainer>
            <Text fontsize={20} fontstyle={"NanumBarunGothicBold"}>
              크리에이터 인증
            </Text>
            <Text
              fontsize={15}
              marginTop={constants.margin02}
              marginBottom={constants.margin02}
            >
              김상욱의 과학 공부 왜 세익스피어는 교양이지만 열역학 제2법칙은
              교양이 아닌 걸까?
            </Text>
            <Text
              fontsize={15}
              fontcolor={styles.darkGreyColor}
              fontstyle={"NanumBarunGothicBold"}
            >
              2019년 10월 2일
            </Text>
          </ContentsBottomContainer>
        </ContentsContainer>

        <ContentsContainer>
          <ContentsTopContainer>
            <NameContainer width={"100%"} justify={"center"}>
              <Text fontsize={50} fontstyle={"NanumBarunGothicBold"}>
                02
              </Text>
            </NameContainer>
          </ContentsTopContainer>
          <ContentsBottomContainer>
            <Text fontsize={20} fontstyle={"NanumBarunGothicBold"}>
              크리에이터 인증
            </Text>
            <Text
              fontsize={15}
              marginTop={constants.margin02}
              marginBottom={constants.margin02}
            >
              김상욱의 과학 공부 왜 세익스피어는 교양이지만 열역학 제2법칙은
              교양이 아닌 걸까?
            </Text>
            <Text
              fontsize={15}
              fontcolor={styles.darkGreyColor}
              fontstyle={"NanumBarunGothicBold"}
            >
              2019년 10월 2일
            </Text>
          </ContentsBottomContainer>
        </ContentsContainer>

        <ContentsContainer>
          <ContentsTopContainer>
            <NameContainer width={"100%"} justify={"center"}>
              <Text fontsize={50} fontstyle={"NanumBarunGothicBold"}>
                01
              </Text>
            </NameContainer>
          </ContentsTopContainer>
          <ContentsBottomContainer>
            <Text fontsize={20} fontstyle={"NanumBarunGothicBold"}>
              크리에이터 인증
            </Text>
            <Text
              fontsize={15}
              marginTop={constants.margin02}
              marginBottom={constants.margin02}
            >
              김상욱의 과학 공부 왜 세익스피어는 교양이지만 열역학 제2법칙은
              교양이 아닌 걸까?
            </Text>
            <Text
              fontsize={15}
              fontcolor={styles.darkGreyColor}
              fontstyle={"NanumBarunGothicBold"}
            >
              2019년 10월 2일
            </Text>
          </ContentsBottomContainer>
        </ContentsContainer>
      </ScrollView>
    </BaseContainer>
  );
};

export default Profile_Auth;
