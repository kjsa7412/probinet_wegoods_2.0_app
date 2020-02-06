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

///
const NameContainer = styled.View`
  flex-direction: row;
  justify-content: ${props => props.justify};
  align-items: center;
  width: ${props => props.width};
`;

const Avatar = styled.Image`
  width: ${styles.Avatar20};
  height: ${styles.Avatar20};
  border-radius: ${styles.Avatar20 / 2};
  margin-left: ${props => (props.marginLeft ? props.marginLeft : 0)};
  margin-right: ${props => (props.marginRight ? props.marginRight : 0)};
`;

const Support_Status_Date = ({ navigation }) => {
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
            object: HeaderStyles.CALENDAR_WEGOODS
          },
          {
            object: HeaderStyles.STAR,
            link: () =>
              navigation.push("Support_Status_Artist", {
                fromScreen: fromScreen
              })
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
            <NameContainer width={"40%"} justify={"flex-start"}>
              <Avatar
                marginRight={constants.margin02}
                source={{ uri: styles.TempImage1 }}
              />
              <Text fontsize={20} fontstyle={"NanumBarunGothicBold"}>
                걸스데이
              </Text>
            </NameContainer>
            <NameContainer width={"20%"} justify={"center"}>
              <Text fontsize={50} fontstyle={"NanumBarunGothicBold"}>
                03
              </Text>
            </NameContainer>
            <NameContainer width={"40%"} justify={"flex-end"}>
              <Text fontsize={20} fontstyle={"NanumBarunGothicBold"}>
                DAVID SA
              </Text>
              <Avatar
                marginLeft={constants.margin02}
                source={{ uri: styles.TempImage1 }}
              />
            </NameContainer>
          </ContentsTopContainer>
          <ContentsBottomContainer>
            <Text fontsize={15}>
              밥 먹자! 배고픈 아이들에게 사랑을 보내주세요
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-end",
                marginTop: constants.margin02,
                marginBottom: constants.margin02
              }}
            >
              <Text
                fontsize={20}
                fontcolor={styles.weGoodsColor}
                fontstyle={"NanumBarunGothicBold"}
              >
                100,000
              </Text>
              <Text fontsize={10}>후원금</Text>
            </View>
            <Text fontsize={15}>2019년 10월 2일</Text>
          </ContentsBottomContainer>
        </ContentsContainer>

        <ContentsContainer>
          <ContentsTopContainer>
            <NameContainer width={"40%"} justify={"flex-start"}>
              <Avatar
                marginRight={constants.margin02}
                source={{ uri: styles.TempImage1 }}
              />
              <Text fontsize={20} fontstyle={"NanumBarunGothicBold"}>
                걸스데이
              </Text>
            </NameContainer>
            <NameContainer width={"20%"} justify={"center"}>
              <Text fontsize={50} fontstyle={"NanumBarunGothicBold"}>
                02
              </Text>
            </NameContainer>
            <NameContainer width={"40%"} justify={"flex-end"}>
              <Text fontsize={20} fontstyle={"NanumBarunGothicBold"}>
                DAVID SA
              </Text>
              <Avatar
                marginLeft={constants.margin02}
                source={{ uri: styles.TempImage1 }}
              />
            </NameContainer>
          </ContentsTopContainer>
          <ContentsBottomContainer>
            <Text fontsize={15}>
              밥 먹자! 배고픈 아이들에게 사랑을 보내주세요
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-end",
                marginTop: constants.margin02,
                marginBottom: constants.margin02
              }}
            >
              <Text
                fontsize={20}
                fontcolor={styles.weGoodsColor}
                fontstyle={"NanumBarunGothicBold"}
              >
                100,000
              </Text>
              <Text fontsize={10}>후원금</Text>
            </View>
            <Text fontsize={15}>2019년 10월 2일</Text>
          </ContentsBottomContainer>
        </ContentsContainer>

        <ContentsContainer>
          <ContentsTopContainer>
            <NameContainer width={"40%"} justify={"flex-start"}>
              <Avatar
                marginRight={constants.margin02}
                source={{ uri: styles.TempImage1 }}
              />
              <Text fontsize={20} fontstyle={"NanumBarunGothicBold"}>
                걸스데이
              </Text>
            </NameContainer>
            <NameContainer width={"20%"} justify={"center"}>
              <Text fontsize={50} fontstyle={"NanumBarunGothicBold"}>
                01
              </Text>
            </NameContainer>
            <NameContainer width={"40%"} justify={"flex-end"}>
              <Text fontsize={20} fontstyle={"NanumBarunGothicBold"}>
                DAVID SA
              </Text>
              <Avatar
                marginLeft={constants.margin02}
                source={{ uri: styles.TempImage1 }}
              />
            </NameContainer>
          </ContentsTopContainer>
          <ContentsBottomContainer>
            <Text fontsize={15}>
              밥 먹자! 배고픈 아이들에게 사랑을 보내주세요
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-end",
                marginTop: constants.margin02,
                marginBottom: constants.margin02
              }}
            >
              <Text
                fontsize={20}
                fontcolor={styles.weGoodsColor}
                fontstyle={"NanumBarunGothicBold"}
              >
                100,000
              </Text>
              <Text fontsize={10}>후원금</Text>
            </View>
            <Text fontsize={15}>2019년 10월 2일</Text>
          </ContentsBottomContainer>
        </ContentsContainer>
      </ScrollView>
    </BaseContainer>
  );
};

export default Support_Status_Date;
