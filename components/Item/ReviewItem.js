///
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ScrollView, View } from "react-native";
import PropTypes from "prop-types";

///
import styles from "../../styles";
import constants from "../../constants";
import UserName from "../Name/UserName";

/// Container
const BaseContainer = styled.View`
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: ${constants.margin05};
  margin-bottom: ${constants.margin05};
`;

const ContentsContainer = styled.View`
  flex-direction: row;
  width: 100%;
  margin-top: ${constants.margin02};
  margin-bottom: ${constants.margin01};
`;

const MessageContainer = styled.View`
  flex-direction: column;
  width: ${props => props.messageSize};
  padding-left: ${props => props.messagePadding};
  overflow: hidden;
`;

///
const Product = styled.Image`
  width: ${props => props.productSize};
  height: ${props => props.productSize};
`;

const Message = styled.Text`
  font-size: 15;
  font-family: NanumBarunGothicLight;
  color: ${styles.blackColor};
  background-color: ${props => props.messageColor};
`;

const Date = styled.Text`
  font-size: 20;
  font-family: NanumBarunGothicLight;
  color: ${styles.DateColor};
`;

const ReviewItem = ({
  avatar,
  username,
  date,
  product,
  contents,
  isMe = false
}) => {
  const [baseSize, setBaseSize] = useState({ width: 0, height: 0, x: 0, y: 0 });

  let productSize = 0;
  let messageSize = baseSize.width;
  let messageColor = styles.whiteColor;
  let messagePadding = 0;

  if (product !== undefined && product !== "") {
    messageSize = baseSize.width / 2;
    productSize = baseSize.width / 2;
    messagePadding = constants.margin01;
  }

  if (isMe === true) {
    messageColor = styles.lightWeGoodsColor;
  }

  return (
    <BaseContainer
      onLayout={event => {
        setBaseSize(event.nativeEvent.layout);
      }}
    >
      <UserName onPress={() => {}} avatar={avatar} username={username} />
      <ContentsContainer>
        <Product productSize={productSize} source={{ uri: product }} />
        <MessageContainer
          messagePadding={messagePadding}
          messageSize={messageSize}
        >
          <Message messageColor={messageColor}>{contents}</Message>
        </MessageContainer>
      </ContentsContainer>
      <Date>{date}</Date>
    </BaseContainer>
  );
};

ReviewItem.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  date: PropTypes.string,
  product: PropTypes.string,
  contents: PropTypes.string,
  isMe: PropTypes.bool
};

export default ReviewItem;
