/// Import
import React, { useState, useEffect } from "react";
import { Text, ScrollView, Image } from "react-native";
import styles from "../../../styles";
import typeDef from "../../../typeDef";
import constants from "../../../constants";
import styled from "styled-components";

/// Components
import HeaderBase from "../../../components/Header/HeaderBase";
import HeaderStyles from "../../../components/Header/HeaderStyles";
import WordButton from "../../../components/Button/WordButton";

/// Container
const BaseContainer = styled.View`
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const BodyContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Goods_Write = ({ navigation }) => {
  const fromScreen = navigation.getParam("fromScreen", "");
  const [baseSize, setBaseSize] = useState({ width: 0, height: 0, x: 0, y: 0 });

  return (
    <BaseContainer
      onLayout={event => {
        setBaseSize(event.nativeEvent.layout);
      }}
    >
      {/* 헤더 */}
      <HeaderBase
        leftItem={[
          {
            object: HeaderStyles.BACK,
            link: () => navigation.navigate(fromScreen)
          }
        ]}
      />
      {/* 본문 */}
      <BodyContainer>
        <WordButton
          onPress={() =>
            navigation.push("Goods_Write_Form", {
              type: typeDef.GOODS_WRITE_COMMON
            })
          }
          text={"일 괄 제 작"}
          margin={constants.margin10}
        />
        <WordButton
          onPress={() =>
            navigation.push("Goods_Write_Form", {
              type: typeDef.GOODS_WRITE_REALTIME
            })
          }
          text={"상 시 제 작"}
          margin={constants.margin10}
        />
      </BodyContainer>
    </BaseContainer>
  );
};

export default Goods_Write;
