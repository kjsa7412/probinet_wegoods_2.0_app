/// Import
import React, { useState, useEffect } from "react";
import { Text, ScrollView, View } from "react-native";
import Swiper from "react-native-swiper";
import styles from "../../../styles";
import constants from "../../../constants";
import styled, { css } from "styled-components";
import useInput from "../../../hooks/useInput";

/// Components
import HeaderBase from "../../../components/Header/HeaderBase";
import HeaderStyles from "../../../components/Header/HeaderStyles";
import WordButton from "../../../components/Button/WordButton";
import RectangleButton from "../../../components/Button/RectangleButton";
import CommonInput from "../../../components/Input/CommonInput";
import CancelButton_Absolute from "../../../components/Button/CancelButton_Absolute";

/// Styled Components
const Touchable = styled.TouchableOpacity``;

/// Container
const BaseContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

/// Cover
const CoverContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${constants.width * 0.9};
  height: ${constants.width * 0.9};
  background-color: ${styles.redColor};
`;

const Cover = styled.Image`
  width: 100%;
  height: 100%;
`;

const Goods_Insert_Product = ({ navigation }) => {
  /// ------------------------ navigation parmeter
  const type = navigation.getParam("type", "");
  const fromScreen = navigation.getParam("fromScreen", "");
  const handler = navigation.getParam("handler", {});

  /// ------------------------ state
  /// size
  const [baseSize, setBaseSize] = useState({ width: 0, height: 0, x: 0, y: 0 });

  /// state
  const title = useInput("");
  const description = useInput("");
  const price = useInput("");
  const quantity = useInput("0");
  const [files, setFiles] = useState([
    styles.TempImage1,
    styles.TempImage2,
    styles.TempImage3
  ]);

  /// swiper Controller
  var swiperRef = {};

  /// ------------------------ function
  /// 등록하기
  const insert = async () => {
    const insertedResult = Object.assign({}, handler.info);
    insertedResult.products.push({
      title: title.value,
      description: description.value,
      price: parseInt(price.value),
      quantity: parseInt(quantity.value),
      files
    });
    handler.setInfo(insertedResult);
  };

  /// 현재 등록된 사진 삭제
  const deleteFile = async delteIndex => {
    // 마지막꺼를 지우는 거면 미리 이전 꺼로 scrollTo 한 후 지워준다
    if (files.length !== 0 && delteIndex === files.length - 1) {
      await swiperRef.scrollTo(delteIndex - 1, false);
    }

    if (files.length !== 0) {
      /// array 를 filter 해서 복사
      const resultFiles = files.filter((element, index) => {
        return index !== delteIndex;
      });
      setFiles(resultFiles);
    }
  };

  return (
    <BaseContainer
      onLayout={event => {
        setBaseSize(event.nativeEvent.layout);
      }}
    >
      {/************* 헤더 *************/}
      <HeaderBase
        leftItem={[
          {
            object: HeaderStyles.BACK,
            link: () => navigation.navigate(fromScreen)
          }
        ]}
      />

      {/************* 본문 *************/}
      <ScrollView
        style={{ width: "90%" }}
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start"
        }}
      >
        {/* 표지 */}
        {files.length !== 0 ? (
          <CoverContainer>
            <Swiper
              ref={swiper => {
                swiperRef = swiper;
              }}
              loop={false}
              activeDotColor={"#FFFFFF"}
            >
              {files.map((file, index) => (
                <View key={index}>
                  <Cover source={{ uri: file }} />
                  <CancelButton_Absolute
                    onPress={() => deleteFile(index)}
                    width={styles.headerHeight}
                  />
                </View>
              ))}
            </Swiper>
          </CoverContainer>
        ) : null}

        <RectangleButton
          onPress={() => navigation.navigate("PhotoNavigation")}
          text={files.length === 0 ? "사진 등록" : "상품 사진"}
        />

        {/* 입력창 */}
        <CommonInput
          onChange={title.onChange}
          title={"상품명"}
          placeholder={"상품명"}
          fontSize={20}
          width={constants.width * 0.9}
        />
        <CommonInput
          onChange={price.onChange}
          title={"가격"}
          placeholder={"가격"}
          fontSize={15}
          keyboardType={"number-pad"}
          width={constants.width * 0.9}
        />
        <CommonInput
          onChange={description.onChange}
          title={"소개"}
          placeholder={"소개"}
          fontSize={15}
          multiline={true}
          returnKeyType={"next"}
          width={constants.width * 0.9}
        />

        {/* */}
        <WordButton
          onPress={() => {
            insert();
            navigation.navigate(fromScreen);
          }}
          text={"등록하기"}
        />
      </ScrollView>
    </BaseContainer>
  );
};

export default Goods_Insert_Product;
