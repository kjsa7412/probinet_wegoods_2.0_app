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
import UserName from "../../../components/Name/UserName";
import GoodsName from "../../../components/Name/GoodsName";
import OrderItem from "../../../components/Payment/OrderItem";
import ProgressItem from "../../../components/Payment/ProgressItem";
import ShippingInfoItem from "../../../components/Payment/ShippingInfoItem";
import WordButton from "../../../components/Button/WordButton";
import RectangleButton from "../../../components/Button/RectangleButton";

///
const BaseContainer = styled.View`
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

///
const Text = styled.Text`
  text-align: center;
  font-size: ${props => props.fontsize};
  color: ${props => (props.fontcolor ? props.fontcolor : styles.blackColor)};
  font-family: ${props =>
    props.fontstyle ? props.fontstyle : "NanumBarunGothicLight"};
  margin-top: ${props => (props.marginTop ? props.marginTop : 0)};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : 0)};
`;

/// Item
const ItemContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: ${constants.margin10};
`;

const ItemTopContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: ${constants.margin05};
`;

const ItemBottomContainer = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

const Profile_Buy = ({ navigation }) => {
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
          justifyContent: "flex-start",
          alignItems: "center"
        }}
      >
        <ItemContainer>
          <ItemTopContainer>
            <Text fontsize={50} fontstyle={"NanumBarunGothicBold"}>
              02.
            </Text>
            <WordButton
              onPress={() =>
                navigation.push("ProfilePaymentNavigation", {
                  fromScreen: navigation.state.routeName
                })
              }
              text={"상세보기"}
              size={50}
              color={styles.weGoodsColor}
            />
          </ItemTopContainer>
          <ItemBottomContainer>
            <UserName
              onPress={() => {}}
              margin={constants.margin01}
              avatar={styles.TempImage1}
              username={"DAVID SA"}
            />
            <GoodsName goodsname={"COMPANY PROJECT"} />
            <Text fontsize={20} marginBottom={constants.margin05}>
              2019년 12월 30일 (월)
            </Text>
            <Text
              fontsize={30}
              fontstyle={"NanumBarunGothicBold"}
              marginTop={constants.margin05}
              marginBottom={constants.margin05}
            >
              주문내역
            </Text>
            <OrderItem />
            <Text
              fontsize={30}
              fontstyle={"NanumBarunGothicBold"}
              marginTop={constants.margin05}
              marginBottom={constants.margin05}
            >
              진행상황
            </Text>
            <ProgressItem />
            <Text
              fontsize={30}
              fontstyle={"NanumBarunGothicBold"}
              marginTop={constants.margin05}
              marginBottom={constants.margin05}
            >
              배송정보
            </Text>
            <ShippingInfoItem />
          </ItemBottomContainer>
        </ItemContainer>
      </ScrollView>
    </BaseContainer>
  );
};

export default Profile_Buy;
