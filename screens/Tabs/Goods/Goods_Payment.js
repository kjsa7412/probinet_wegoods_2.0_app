/// Import
import React, { useState, useEffect } from "react";
import { Text, ScrollView, View } from "react-native";
import styles from "../../../styles";
import constants from "../../../constants";
import styled from "styled-components";

/// Components
import HeaderBase from "../../../components/Header/HeaderBase";
import HeaderStyles from "../../../components/Header/HeaderStyles";
import ProductItem from "../../../components/Payment/ProductItem";
import OrderItem from "../../../components/Payment/OrderItem";
import ShippingItem from "../../../components/Payment/ShippingItem";
import SupportItem from "../../../components/Payment/SupportItem";
import GoodsName from "../../../components/Name/GoodsName";
import WordButton from "../../../components/Button/WordButton";
import RectangleButton from "../../../components/Button/RectangleButton";

/// Container
const BaseContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-top: ${constants.margin10};
  margin-bottom: ${constants.margin05};
`;

const PaymentTypeContainer = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

const DocumentContainer = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-top: ${constants.margin10};
  margin-bottom: ${constants.margin05};
`;

///

const Title = styled.Text`
  font-size: 30;
  font-family: NanumBarunGothicBold;
`;

const Line = styled.View`
  border: 0.5px solid
  border-color: ${props =>
    props.lineColor ? props.lineColor : styles.darkGreyColor};
  border-top-width: 0.5;
  width: 80%;
  margin-top:${constants.margin10}
  margin-bottom:${constants.margin10}
`;

const Goods_Payment = ({ navigation }) => {
  const fromScreen = navigation.getParam("fromScreen", "");
  const [baseSize, setBaseSize] = useState({ width: 0, height: 0, x: 0, y: 0 });

  /// Header
  let leftItem = [
    {
      object: HeaderStyles.BACK,
      link: () => navigation.navigate(fromScreen)
    }
  ];

  return (
    <BaseContainer
      onLayout={event => {
        setBaseSize(event.nativeEvent.layout);
      }}
    >
      <HeaderBase leftItem={leftItem} />
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
        <GoodsName goodsname={"COMPANY PROJECT"} />

        {/* 상품 */}
        <ProductItem
          height={baseSize.width * 0.2}
          product={styles.TempImage1}
          productName={"SEVENTEEN1"}
          productPrice={"₩ 10,000 ( 10% 서포트 )"}
          productCount={"10"}
          minusOnPress={() => {}}
          plusOnPress={() => {}}
        />

        <ProductItem
          height={baseSize.width * 0.2}
          product={styles.TempImage1}
          productName={"SEVENTEEN1"}
          productPrice={"₩ 10,000 ( 10% 서포트 )"}
          productCount={"10"}
          minusOnPress={() => {}}
          plusOnPress={() => {}}
        />

        {/* 주문내역 */}
        <TitleContainer>
          <Title>주문내역</Title>
        </TitleContainer>

        <OrderItem />

        {/* 배송지 정보 */}
        <TitleContainer>
          <Title>배송지</Title>
        </TitleContainer>

        <ShippingItem />

        {/* 결제 수단 */}
        <TitleContainer>
          <Title>결제수단</Title>
        </TitleContainer>
        <PaymentTypeContainer>
          <WordButton
            onPress={() => {}}
            text={"계좌이체"}
            size={20}
            margin={constants.margin02}
          />
          <WordButton
            onPress={() => {}}
            text={"카드결제"}
            size={20}
            margin={constants.margin02}
            color={styles.blackColor}
          />
          <WordButton
            onPress={() => {}}
            text={"휴대폰결제"}
            size={20}
            margin={constants.margin02}
            color={styles.blackColor}
          />
        </PaymentTypeContainer>
        <Line />
        <SupportItem />
        <RectangleButton
          text={"서포트 등록"}
          desc={"서포트 후원금은 구매자, 판매자 각 50%의 비율로 후원됩니다."}
        />
        <DocumentContainer>
          <WordButton
            onPress={() => {}}
            text={"크리에이터 인증 내역 확인"}
            size={30}
            margin={constants.margin02}
          />
          <WordButton
            onPress={() => {}}
            text={"교환/환불 규정 확인"}
            size={30}
            margin={constants.margin02}
          />
          <WordButton
            onPress={() => {}}
            text={"상품 구매 동의 약관 확인"}
            size={30}
            margin={constants.margin02}
          />
        </DocumentContainer>
        <WordButton
          onPress={() => {}}
          text={"결제하기"}
          desc={"결제 시 상품 구매 동의 약관을 수락한 것으로 간주합니다."}
          margin={constants.margin10}
        />
      </ScrollView>
    </BaseContainer>
  );
};

export default Goods_Payment;
