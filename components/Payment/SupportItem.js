///
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ScrollView } from "react-native";
import PropTypes from "prop-types";

///
import styles from "../../styles";
import typeDef from "../../typeDef";
import constants from "../../constants";
import BaseInput from "../Input/BaseInput";
import SupportItem_Other from "../Item/SupportItem";
import ArtistName from "../Name/ArtistName";
import CheckButton from "..//Button/CheckButton";

/// Container
const Touchable = styled.TouchableOpacity``;

const SupportContainer = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

const InputContainer = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-top: ${constants.margin01};
  margin-bottom: ${constants.margin05};
`;

const Text = styled.Text`
  font-size: 15;
  font-family: NanumBarunGothicLight;
`;

/// Artist
const ArtistItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 15;
  font-family: NanumBarunGothicLight;
  margin-bottom: ${constants.margin01};
`;

const SupportItem = ({}) => {
  const [baseSize, setBaseSize] = useState({ width: 0, height: 0, x: 0, y: 0 });
  return (
    <SupportContainer
      onLayout={event => {
        setBaseSize(event.nativeEvent.layout);
      }}
    >
      <SupportItem_Other
        cover={styles.TempImage1}
        organization={"세이브더칠드런"}
        percent={"45%"}
        title={"밥 먹자! 배고픈 아이들에게 사랑을 보내주세요"}
        supportStatus={typeDef.SUPPORT_PROCEEDING}
      />

      <InputContainer>
        <Title>아티스트</Title>
        <ArtistItemContainer>
          <ArtistName
            onChange={() => {}}
            artist={"지민"}
            textColor={styles.blackColor}
            textSize={"25"}
            margin={constants.margin01}
          />
          <CheckButton onChange={() => {}} width={"25"} />
        </ArtistItemContainer>
        <ArtistItemContainer>
          <ArtistName
            onChange={() => {}}
            artist={"지민"}
            group={"방탄소년단"}
            textColor={styles.blackColor}
            textSize={"25"}
            margin={constants.margin01}
          />
          <CheckButton onChange={() => {}} width={"25"} />
        </ArtistItemContainer>
      </InputContainer>

      <InputContainer>
        <Text>응원메시지</Text>
        <BaseInput
          onChangeText={() => {}}
          placeholder={"응원메시지"}
          fontSize={15}
          multiline={true}
          returnKeyType={"done"}
          keyboardType={"default"}
          width={baseSize.width}
          isLine={true}
          lineColor={styles.blackColor}
          fontType={"NanumBarunGothicBold"}
        />
      </InputContainer>
    </SupportContainer>
  );
};

SupportItem.propTypes = {};

export default SupportItem;
