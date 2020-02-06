///
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ScrollView } from "react-native";
import PropTypes from "prop-types";

///
import styles from "../../styles";
import constants from "../../constants";
import BaseInput from "../Input/BaseInput";

/// Container
const Touchable = styled.TouchableOpacity``;

const ShippingContainer = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

///
const ItemContainer = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-top: ${constants.margin01};
  margin-bottom: ${constants.margin05};
`;

const Text = styled.Text`
  font-size: ${props => props.fontSize};
  font-family: NanumBarunGothicBold;
`;

const ShippingItem = ({}) => {
  const [baseSize, setBaseSize] = useState({ width: 0, height: 0, x: 0, y: 0 });
  return (
    <ShippingContainer
      onLayout={event => {
        setBaseSize(event.nativeEvent.layout);
      }}
    >
      <ItemContainer>
        <Text fontSize={20}>받으시는분</Text>
        <BaseInput
          onChangeText={() => {}}
          placeholder={"받으시는분"}
          fontSize={15}
          multiline={true}
          returnKeyType={"done"}
          keyboardType={"default"}
          width={baseSize.width}
          isLine={true}
          lineColor={styles.blackColor}
          fontType={"NanumBarunGothicLight"}
        />
      </ItemContainer>
      <ItemContainer>
        <Text fontSize={20}>연락처</Text>
        <BaseInput
          onChangeText={() => {}}
          placeholder={"연락처"}
          fontSize={15}
          multiline={true}
          returnKeyType={"done"}
          keyboardType={"default"}
          width={baseSize.width}
          isLine={true}
          lineColor={styles.blackColor}
          fontType={"NanumBarunGothicLight"}
        />
      </ItemContainer>
      <ItemContainer>
        <Text fontSize={20}>우편번호</Text>
        <BaseInput
          onChangeText={() => {}}
          placeholder={"우편번호"}
          fontSize={15}
          multiline={true}
          returnKeyType={"done"}
          keyboardType={"default"}
          width={baseSize.width}
          isLine={true}
          lineColor={styles.blackColor}
          fontType={"NanumBarunGothicLight"}
        />
      </ItemContainer>
      <ItemContainer>
        <Text fontSize={20}>주소</Text>
        <BaseInput
          onChangeText={() => {}}
          placeholder={"주소"}
          fontSize={15}
          multiline={true}
          returnKeyType={"done"}
          keyboardType={"default"}
          width={baseSize.width}
          isLine={true}
          lineColor={styles.blackColor}
          fontType={"NanumBarunGothicLight"}
        />
      </ItemContainer>
      <ItemContainer>
        <Text fontSize={20}>상세주소</Text>
        <BaseInput
          onChangeText={() => {}}
          placeholder={"상세주소"}
          fontSize={15}
          multiline={true}
          returnKeyType={"done"}
          keyboardType={"default"}
          width={baseSize.width}
          isLine={true}
          lineColor={styles.blackColor}
          fontType={"NanumBarunGothicLight"}
        />
      </ItemContainer>
      <ItemContainer>
        <Text fontSize={20}>요청사항</Text>
        <BaseInput
          onChangeText={() => {}}
          placeholder={"요청사항"}
          fontSize={15}
          multiline={true}
          returnKeyType={"done"}
          keyboardType={"default"}
          width={baseSize.width}
          isLine={true}
          lineColor={styles.blackColor}
          fontType={"NanumBarunGothicLight"}
        />
      </ItemContainer>
    </ShippingContainer>
  );
};

ShippingItem.propTypes = {};

export default ShippingItem;
