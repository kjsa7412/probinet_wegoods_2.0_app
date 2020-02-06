///
import React from "react";
import styled from "styled-components";
import { ScrollView } from "react-native";
import PropTypes from "prop-types";

///
import styles from "../../styles";
import constants from "../../constants";

/// Container
const Touchable = styled.TouchableOpacity``;

const BaseContainer = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const StatusContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${props =>
    props.bgColor ? props.bgColor : styles.whiteColor};
`;

const ItemContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${constants.width * 0.9 * 0.25};
  height: ${constants.width * 0.9 * 0.25};
`;

/// Item
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

const ProgressItem = ({}) => {
  return (
    <BaseContainer>
      <StatusContainer>
        <ItemContainer>
          <Number>1</Number>
          <Title>주문받는중</Title>
        </ItemContainer>
        <ItemContainer>
          <Number>2</Number>
          <Title>주문마감</Title>
        </ItemContainer>
        <ItemContainer>
          <Number>3</Number>
          <Title>제작중</Title>
        </ItemContainer>
        <ItemContainer>
          <Number>4</Number>
          <Title>제작완료</Title>
        </ItemContainer>
      </StatusContainer>
      <StatusContainer>
        <ItemContainer>
          <Number>5</Number>
          <Title>배송준비중</Title>
        </ItemContainer>

        <ItemContainer>
          <Number>6</Number>
          <Title>배송시작</Title>
        </ItemContainer>

        <ItemContainer>
          <Number>7</Number>
          <Title>배송완료</Title>
        </ItemContainer>

        <ItemContainer>
          <Number>8</Number>
          <Title>구매완료</Title>
        </ItemContainer>
      </StatusContainer>
    </BaseContainer>
  );
};

ProgressItem.propTypes = {};

export default ProgressItem;
