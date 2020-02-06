/// Import
import React, { useState, useEffect } from "react";
import { Text, ScrollView, View } from "react-native";
import styled from "styled-components";
import styles from "../../styles";
import constants from "../../constants";

/// Components
import HeaderBase from "../../components/Header/HeaderBase";
import HeaderStyles from "../../components/Header/HeaderStyles";
import WordButton from "../../components/Button/WordButton";
import BaseInput from "../../components/Input/BaseInput";
import MessageItem from "../../components/Item/MessageItem";

/// Styled Components
const BaseContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

const ContentsContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 80%;
`;

const MessageContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const Message = ({ navigation }) => {
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
        style={{
          width: baseSize.width * 0.8,
          height: baseSize.height * 0.55
        }}
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <MessageItem
          message={styles.TempText1}
          date={"10시간전"}
          isMe={false}
        />
        <MessageItem
          photo={styles.TempImage1}
          message={styles.TempText1}
          date={"10시간전"}
          isMe={true}
        />
        <MessageItem
          message={styles.TempText1}
          date={"10시간전"}
          isMe={false}
        />
      </ScrollView>
      <ContentsContainer>
        <MessageContainer>
          <BaseInput
            onChangeText={() => {}}
            placeholder={"메시지를 입력해주세요."}
            fontSize={15}
            multiline={true}
            returnKeyType={"next"}
            keyboardType={"default"}
            width={baseSize.width * 0.8}
            isLine={true}
            fontType={"NanumBarunGothicLight"}
          />
        </MessageContainer>
        <ButtonContainer>
          <WordButton onPress={() => {}} text={"업로드"} size={"30"} />
          <WordButton onPress={() => {}} text={"전송하기"} size={"30"} />
        </ButtonContainer>
      </ContentsContainer>
    </BaseContainer>
  );
};

export default Message;
