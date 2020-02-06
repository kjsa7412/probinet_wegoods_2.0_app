/// Import
import React, { useState, useEffect } from "react";
import { Text, ScrollView, View } from "react-native";
import styled from "styled-components";
import styles from "../../styles";
import constants from "../../constants";

/// Components
import HeaderBase from "../../components/Header/HeaderBase";
import HeaderStyles from "../../components/Header/HeaderStyles";
import CommentItem from "../../components/Item/CommentItem";
import BaseInput from "../../components/Input/BaseInput";
import WordButton from "../../components/Button/WordButton";

/// Styled Components
const BaseContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

const MessageContainer = styled.View`
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  margin-top: ${constants.margin05};
`;

///
const Comment = ({ navigation }) => {
  const fromScreen = navigation.getParam("fromScreen", "");
  const [baseSize, setBaseSize] = useState({ width: 0, height: 0, x: 0, y: 0 });

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
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, width: "80%" }}
        contentContainerStyle={{
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <CommentItem
          avatar={styles.TempImage1}
          username={"DAVID SA"}
          date={"2019.12.30"}
          contents={styles.TempText2}
          isMe={true}
        />
        <CommentItem
          avatar={styles.TempImage1}
          username={"DAVID SA"}
          date={"2019.12.30"}
          contents={styles.TempText1}
        />
        <CommentItem
          avatar={styles.TempImage1}
          username={"DAVID SA"}
          date={"2019.12.30"}
          contents={styles.TempText1}
          isMe={true}
        />
        <CommentItem
          avatar={styles.TempImage1}
          username={"DAVID SA"}
          date={"2019.12.30"}
          contents={styles.TempText1}
        />
        <CommentItem
          avatar={styles.TempImage1}
          username={"DAVID SA"}
          date={"2019.12.30"}
          contents={styles.TempText1}
        />
      </ScrollView>
      <MessageContainer>
        <BaseInput
          onChangeText={() => {}}
          placeholder={"댓글을 입력해주세요."}
          fontSize={15}
          width={baseSize.width * 0.8}
          isLine={true}
          fontType={"NanumBarunGothicLight"}
        />
      </MessageContainer>
      <WordButton onPress={() => {}} text={"등록하기"} size={30} />
    </BaseContainer>
  );
};

export default Comment;
