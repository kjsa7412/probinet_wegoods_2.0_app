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
import ReviewItem from "../../components/Item/ReviewItem";

/// Styled Components
const BaseContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

///

const Review = ({ navigation }) => {
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
        <ReviewItem
          avatar={styles.TempImage1}
          username={"DAVID SA"}
          date={"2019.12.30"}
          product={styles.TempImage1}
          contents={styles.TempText2}
          isMe={true}
        />
        <ReviewItem
          avatar={styles.TempImage1}
          username={"DAVID SA"}
          date={"2019.12.30"}
          contents={styles.TempText1}
        />
        <ReviewItem
          avatar={styles.TempImage1}
          username={"DAVID SA"}
          date={"2019.12.30"}
          contents={styles.TempText1}
          isMe={true}
        />
        <ReviewItem
          avatar={styles.TempImage1}
          username={"DAVID SA"}
          date={"2019.12.30"}
          contents={styles.TempText1}
        />
        <ReviewItem
          avatar={styles.TempImage1}
          username={"DAVID SA"}
          date={"2019.12.30"}
          contents={styles.TempText1}
        />
      </ScrollView>

      <WordButton
        onPress={() => navigation.push("WriteReview")}
        text={"작성하기"}
      />
    </BaseContainer>
  );
};

export default Review;
