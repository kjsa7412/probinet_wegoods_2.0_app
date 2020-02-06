///
import React from "react";
import styled from "styled-components";
import { ScrollView } from "react-native";
import PropTypes from "prop-types";

///
import styles from "../../styles";
import constants from "../../constants";
import WordButton from "../Button/WordButton";

/// Container
const Touchable = styled.TouchableOpacity``;

const OrderContainer = styled.View`
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
  margin-bottom: ${constants.margin01};
`;

const ContentsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-top: ${constants.margin01};
  margin-bottom: ${constants.margin01};
`;

const Text = styled.Text`
  font-size: ${props => props.fontSize};
  font-family: NanumBarunGothicBold;
`;

///
const Line = styled.View`
  border: 0.5px solid
  border-color: ${props =>
    props.lineColor ? props.lineColor : styles.darkGreyColor};
  border-top-width: 0.5;
  width: 100%;
`;

const Dashed = styled.View`
  border-style: dashed;
  border-color: ${props =>
    props.lineColor ? props.lineColor : styles.darkGreyColor};
  border-width: 0.5;
  border-radius: 1;
  width: 100%;
`;

const OrderItem = ({}) => {
  return (
    <OrderContainer>
      <ItemContainer>
        <ContentsContainer>
          <Text fontSize={20}>SEVENTEEN1</Text>
        </ContentsContainer>
        <ContentsContainer>
          <Text fontSize={15}>₩ 10,000 x 10</Text>
          <Text fontSize={15}>+ 100,000</Text>
        </ContentsContainer>
      </ItemContainer>

      <ItemContainer>
        <ContentsContainer>
          <Text fontSize={20}>SEVENTEEN1</Text>
        </ContentsContainer>
        <ContentsContainer>
          <Text fontSize={15}>₩ 10,000 x 10</Text>
          <Text fontSize={15}>+ 100,000</Text>
        </ContentsContainer>
      </ItemContainer>

      <ItemContainer>
        <ContentsContainer>
          <Text fontSize={20}>배송비</Text>
        </ContentsContainer>
        <ContentsContainer>
          <Text fontSize={15}>₩ 10,000</Text>
          <Text fontSize={15}>+ 10,000</Text>
        </ContentsContainer>
      </ItemContainer>
      <Line />
      <ItemContainer>
        <ContentsContainer>
          <Text fontSize={20}>결재금액</Text>
          <Text fontSize={15}>₩ 10,000</Text>
        </ContentsContainer>
      </ItemContainer>
      <Dashed />
      <ItemContainer>
        <ContentsContainer>
          <Text fontSize={20}>서포트</Text>
          <Text fontSize={15}>₩ 1,000</Text>
        </ContentsContainer>
      </ItemContainer>
    </OrderContainer>
  );
};

OrderItem.propTypes = {};

export default OrderItem;
