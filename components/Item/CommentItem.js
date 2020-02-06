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
  overflow: hidden;
`;

///
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

const CommentItem = ({ avatar, username, date, contents, isMe = false }) => {
  const [baseSize, setBaseSize] = useState({ width: 0, height: 0, x: 0, y: 0 });

  let messageSize = baseSize.width;
  let messageColor = styles.whiteColor;

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
        <MessageContainer messageSize={messageSize}>
          <Message messageColor={messageColor}>{contents}</Message>
        </MessageContainer>
      </ContentsContainer>
      <Date>{date}</Date>
    </BaseContainer>
  );
};

CommentItem.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  date: PropTypes.string,
  contents: PropTypes.string,
  isMe: PropTypes.bool
};

export default CommentItem;
