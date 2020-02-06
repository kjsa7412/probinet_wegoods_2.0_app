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

const BaseContainer = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

const ItemContainer = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-top: ${constants.margin02};
  margin-bottom: ${constants.margin02};
`;

const Text = styled.Text`
  font-size: ${props => props.fontsize};
  color: ${props => (props.fontcolor ? props.fontcolor : styles.blackColor)};
  font-family: ${props =>
    props.fontstyle ? props.fontstyle : "NanumBarunGothicLight"};
  margin-top: ${props => (props.marginTop ? props.marginTop : 0)};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : 0)};
`;

const ShippingInfoItem = ({}) => {
  const [baseSize, setBaseSize] = useState({ width: 0, height: 0, x: 0, y: 0 });
  return (
    <BaseContainer
      onLayout={event => {
        setBaseSize(event.nativeEvent.layout);
      }}
    >
      <ItemContainer>
        <Text fontsize={10}>받으시는분</Text>
        <Text fontsize={20}>사경진</Text>
      </ItemContainer>
      <ItemContainer>
        <Text fontsize={10}>연락처</Text>
        <Text fontsize={20}>010-7745-4411</Text>
      </ItemContainer>
      <ItemContainer>
        <Text fontsize={10}>우편번호</Text>
        <Text fontsize={20}>111-111</Text>
      </ItemContainer>
      <ItemContainer>
        <Text fontsize={10}>주소</Text>
        <Text fontsize={20}>부산광역시 금정구 장전동</Text>
      </ItemContainer>
      <ItemContainer>
        <Text fontsize={10}>상세주소</Text>
        <Text fontsize={20}>1동 101호</Text>
      </ItemContainer>
      <ItemContainer>
        <Text fontsize={10}>요청사항</Text>
        <Text fontsize={20}>감사합니다.</Text>
      </ItemContainer>
    </BaseContainer>
  );
};

ShippingInfoItem.propTypes = {};

export default ShippingInfoItem;
