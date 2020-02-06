/// Import
import React, { useState, useEffect } from "react";
import { Text, ScrollView, Image } from "react-native";
import styled from "styled-components";
import styles from "../../../styles";
import constants from "../../../constants";
import HeaderStyles from "../../../components/Header/HeaderStyles";

/// Components
import HeaderBase from "../../../components/Header/HeaderBase";
import CoverParts from "../../../components/Parts/CoverParts";
import UserName from "../../../components/Name/UserName";
import GoodsName from "../../../components/Name/GoodsName";
import ProductItem from "../../../components/Item/ProductItem";
import SupportItem from "../../../components/Item/SupportItem";
import WordButton from "../../../components/Button/WordButton";

/// Container
const BaseContainer = styled.View`
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const TopContainer = styled.View`
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const AbsoluteContainer = styled.View`
  flex-direction: column;
  position: absolute;
`;

const ProfileContainer = styled.View`
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
`;

const BlankContainer = styled.View`
  flex-direction: column;
  width: 100%;
  height: ${constants.width * 0.83};
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

const ItemContainer = styled.TouchableOpacity`
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

/// Bio
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

///
const Line = styled.View`
  border: 0.1px solid #57989E
  border-top-width: 0.5;
  margin-top: 10;
  margin-bottom: 10;
  width: ${constants.width * 0.8}
`;

const Goods_Detail = ({ navigation }) => {
  const [baseSize, setBaseSize] = useState({ width: 0, height: 0, x: 0, y: 0 });
  const id = navigation.getParam("id", "");

  return (
    <BaseContainer
      onLayout={event => {
        setBaseSize(event.nativeEvent.layout);
      }}
    >
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
        <TopContainer>
          <AbsoluteContainer>
            <CoverParts cover={styles.TempImage1} supportPercent={"10"} />
          </AbsoluteContainer>
          <ProfileContainer>
            <BlankContainer />
            <UserName
              onPress={() => {}}
              margin={constants.margin01}
              avatar={styles.TempImage1}
              username={"DAVID SA"}
            />
            <GoodsName goodsname={"COMPANY PROJECT"} date={"2019.12.30"} />
          </ProfileContainer>
        </TopContainer>

        <StatusContainer>
          <ItemContainer
            onPress={() =>
              navigation.push("GoodsSearchNavigation", {
                fromScreen: navigation.state.routeName,
                type: styles.SearchType_User
              })
            }
          >
            <Number color={styles.blackColor}>1K</Number>
            <Title color={styles.blackColor}>좋아요</Title>
          </ItemContainer>
          <ItemContainer
            onPress={() =>
              navigation.push("GoodsReviewNavigation", {
                fromScreen: navigation.state.routeName
              })
            }
          >
            <Number color={styles.blackColor}>11</Number>
            <Title color={styles.blackColor}>후기</Title>
          </ItemContainer>
          <ItemContainer
            onPress={() =>
              navigation.push("GoodsCommentNavigation", {
                fromScreen: navigation.state.routeName
              })
            }
          >
            <Number color={styles.blackColor}>22</Number>
            <Title color={styles.blackColor}>댓글</Title>
          </ItemContainer>
        </StatusContainer>

        <BioContainer>
          <Bio>{styles.TempText1}</Bio>
        </BioContainer>

        <ProductItem
          src={[styles.TempImage1, styles.TempImage1]}
          title={"SEVENTEEN"}
          desc={styles.TempText1}
          price={"10,000"}
          isCancel={false}
          cancelWidth={styles.headerHeight}
          cancelPress={() => {}}
        />
        <ProductItem
          src={[styles.TempImage1, styles.TempImage1]}
          title={"SEVENTEEN"}
          desc={styles.TempText1}
          price={"10,000"}
          isCancel={false}
          cancelWidth={styles.headerHeight}
          cancelPress={() => {}}
        />

        <Line />

        <SupportItem
          cover={
            "http://post.phinf.naver.net/MjAxODExMjBfMTEy/MDAxNTQyNzA5MTk5MjQx.3hOdRATmB5qxOmeQqMcZ_2HBSkwoGkN8IfVPvYf1L88g.ALpvPEnQAYFe_aNTaDsmJ8GX6nJBNg72AIAGT3sq1XUg.JPEG/I-v7qpReN1ZhPYUS1CiBCuudkio4.jpg"
          }
          organization={"세이브더칠드런"}
          percent={"45%"}
          title={"밥 먹자! 배고픈 아이들에게 사랑을 보내주세요"}
          isComplete={false}
        />

        <WordButton
          onPress={() =>
            navigation.push("GoodsPaymentNavigation", {
              fromScreen: navigation.state.routeName
            })
          }
          text={"주문하기"}
        />
      </ScrollView>
    </BaseContainer>
  );
};

export default Goods_Detail;
