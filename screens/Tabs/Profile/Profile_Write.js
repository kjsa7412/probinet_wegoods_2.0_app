/// Import
import React, { useState, useEffect } from "react";
import { Text, ScrollView, View } from "react-native";
import styled from "styled-components";
import styles from "../../../styles";
import constants from "../../../constants";

/// Components
import HeaderBase from "../../../components/Header/HeaderBase";
import HeaderStyles from "../../../components/Header/HeaderStyles";
import WordButton from "../../../components/Button/WordButton";
import BaseInput from "../../../components/Input/BaseInput";
import CancelButton_Absolute from "../../../components/Button/CancelButton_Absolute";

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

const ProductContainer = styled.View`
  width: ${props => (props.size ? props.size : "0")};
  height: ${props => (props.size ? props.size : "0")};
`;

///
const Product = styled.Image`
  width: 100%;
  height: 100%;
`;

const Profile_Write = ({ navigation }) => {
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
      <ProductContainer size={baseSize.width * 0.8}>
        <Product source={{ uri: styles.TempImage1 }} />
        <CancelButton_Absolute onPress={() => {}} width={styles.headerHeight} />
      </ProductContainer>
      <ContentsContainer>
        <MessageContainer>
          <BaseInput
            onChangeText={() => {}}
            placeholder={"후기를 입력해주세요."}
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
          <WordButton onPress={() => {}} text={"등록하기"} size={"30"} />
        </ButtonContainer>
      </ContentsContainer>
    </BaseContainer>
  );
};

export default Profile_Write;
