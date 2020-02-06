/// Import
import React, { useState, useEffect } from "react";
import { ScrollView, Image } from "react-native";
import styled from "styled-components";
import styles from "../../../styles";
import typeDef from "../../../typeDef";
import constants from "../../../constants";

// apollo
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";

/// Components
import HeaderBase from "../../../components/Header/HeaderBase";
import HeaderStyles from "../../../components/Header/HeaderStyles";
import SupportItem from "../../../components/Item/SupportItem";
import PhotoItem from "../../../components/Item/PhotoItem";
import WordButton from "../../../components/Button/WordButton";
import RectangleButton from "../../../components/Button/RectangleButton";

///
const BaseContainer = styled.View`
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const DescContainer = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: ${constants.width * 0.9};
  margin-bottom: ${constants.margin05};
`;

/// Item
const StatusContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${props =>
    props.bgColor ? props.bgColor : styles.whiteColor};
  width: ${constants.width * 0.9};
  margin-top: ${constants.margin05};
  margin-bottom: ${constants.margin05};
`;

const ItemContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${constants.width * 0.25};
  height: ${constants.width * 0.25};
`;

const ItemContainer_Touchable = styled.TouchableOpacity`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${constants.width * 0.25};
  height: ${constants.width * 0.25};
`;

const Number = styled.Text`
  font-size: 30;
  text-align: center;
  font-family: NanumBarunGothicBold;
  color: ${props => (props.color ? props.color : styles.blackColor)};
`;

const Title = styled.Text`
  font-size: 15;
  text-align: center;
  font-family: NanumBarunGothicLight;
  color: ${props => (props.color ? props.color : styles.blackColor)};
`;

///
const Text = styled.Text`
  font-size: ${props => props.fontsize};
  text-align: center;
  font-family: ${props =>
    props.fontstyle ? props.fontstyle : "NanumBarunGothicLight"};
  color: ${props => (props.color ? props.color : styles.blackColor)};
`;

///
const BioContainer = styled.View`
  flex-direction: column;
  width: 90%;
`;

const Bio = styled.Text`
font-size: 15;
font-family: NanumBarunGothicLight;
margin-top: ${constants.margin05}
margin-bottom: ${constants.margin05}
`;

const Support_Detail = ({ navigation }) => {
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
        style={{ width: "100%" }}
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <SupportItem
          navigation={navigation}
          cover={
            "http://post.phinf.naver.net/MjAxODExMjBfMTEy/MDAxNTQyNzA5MTk5MjQx.3hOdRATmB5qxOmeQqMcZ_2HBSkwoGkN8IfVPvYf1L88g.ALpvPEnQAYFe_aNTaDsmJ8GX6nJBNg72AIAGT3sq1XUg.JPEG/I-v7qpReN1ZhPYUS1CiBCuudkio4.jpg"
          }
          organization={"세이브더칠드런"}
          percent={"45%"}
          title={"밥 먹자! 배고픈 아이들에게 사랑을 보내주세요"}
          isComplete={false}
          supportStatus={typeDef.SUPPORT_PROCEEDING}
        />

        <DescContainer>
          <Text fontsize={15}>모금기간</Text>
          <Text fontsize={20} fontstyle={"NanumBarunGothicBold"}>
            2019년 12월 01일 ~ 2019년 12월 30일
          </Text>
        </DescContainer>

        <DescContainer>
          <Text fontsize={15}>모금액</Text>
          <Text fontsize={20} fontstyle={"NanumBarunGothicBold"}>
            500,000원 / 600,000원
          </Text>
        </DescContainer>

        <StatusContainer>
          <ItemContainer>
            <Number color={styles.blackColor}>20</Number>
            <Title color={styles.blackColor}>남은기간</Title>
          </ItemContainer>
          <ItemContainer>
            <Number color={styles.blackColor}>45%</Number>
            <Title color={styles.blackColor}>진행상태</Title>
          </ItemContainer>
          <ItemContainer_Touchable
            onPress={() =>
              navigation.push("Support_Status_Date", {
                fromScreen: navigation.state.routeName
              })
            }
          >
            <Number color={styles.blackColor}>22</Number>
            <Title color={styles.blackColor}>모금인원</Title>
          </ItemContainer_Touchable>
        </StatusContainer>

        <BioContainer>
          <Bio>{styles.TempText1}</Bio>
        </BioContainer>

        <PhotoItem
          src={[styles.TempImage1, styles.TempImage1]}
          title={"SEVENTEEN"}
          desc={styles.TempText1}
        />
        <PhotoItem
          src={[styles.TempImage1, styles.TempImage1]}
          title={"SEVENTEEN"}
          desc={styles.TempText1}
        />

        <WordButton
          onPress={() => navigation.push("Support_Result")}
          text={"결과보기"}
        />
      </ScrollView>
    </BaseContainer>
  );
};

export default Support_Detail;
