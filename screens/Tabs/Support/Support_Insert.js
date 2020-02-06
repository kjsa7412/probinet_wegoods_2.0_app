/// Import
import React, { useState, useEffect } from "react";
import { Text, ScrollView, Image } from "react-native";
import styles from "../../../styles";
import constants from "../../../constants";
import styled from "styled-components";
import useInput from "../../../hooks/useInput";
import { calcPercentToStr } from "../../../func/calc/numberCalc";

/// Components
import HeaderBase from "../../../components/Header/HeaderBase";
import HeaderStyles from "../../../components/Header/HeaderStyles";
import WordButton from "../../../components/Button/WordButton";
import RectangleButton from "../../../components/Button/RectangleButton";
import CommonInput from "../../../components/Input/CommonInput";
import ArtistName from "../../../components/Name/ArtistName";
import CheckButton from "../../../components/Button/CheckButton";
import SupportItem from "../../../components/Item/SupportItem";

/// Styled Components
const Touchable = styled.TouchableOpacity``;

/// Container
const BaseContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

/// Artist
const ArtistContainer = styled.View`
  flex-direction: column;
  width: 100%;
`;

const ArtistItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 15;
  font-family: NanumBarunGothicLight;
  margin-bottom: ${constants.margin01};
`;

const Support_Insert = ({ navigation }) => {
  /// ------------------------ navigation parmeter
  const fromScreen = navigation.getParam("fromScreen", "");
  const handler = navigation.getParam("handler", {});

  /// ------------------------ state
  /// size
  const [baseSize, setBaseSize] = useState({ width: 0, height: 0, x: 0, y: 0 });
  /// 입력될 데이터 저장
  const [support, setSupport] = useState(handler.info.support);
  const supportHandler = { support, setSupport };
  const [supportStar, setSupportStar] = useState(handler.info.supportStar);
  const supportPercent = useInput(handler.info.supportPercent.toString());
  const supportMessage = useInput(handler.info.supportMessage);

  /// ------------------------ function

  /// supportStar 제거
  const deleteSupportStar = async () => {
    if (supportStar !== null) {
      setSupportStar(null);
    }
  };
  /// supportStar 제거
  const selectStar = async value => {
    if (supportStar !== null && supportStar.id === value.id) {
      setSupportStar(null);
    } else {
      setSupportStar(value);
    }
  };

  //console.log("supportStar", supportStar);

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
          alignItems: "center"
        }}
      >
        {/* 서포트 */}
        {handler.info.support !== null ? (
          <SupportItem
            cover={handler.info.support.files[0]}
            organization={handler.info.support.organization}
            percent={calcPercentToStr(
              handler.info.support.collection,
              handler.info.support.target
            )}
            title={handler.info.support.title}
            supportStatus={handler.info.support.status}
          />
        ) : null}

        <RectangleButton
          onPress={() =>
            navigation.push("Support_List", {
              handler: supportHandler
            })
          }
          text={handler.info.support === null ? "서포트 선택" : "서포트"}
          desc={
            "서포트를 등록하지 않는 경우 구매자가 후원할 서포트를 선택합니다."
          }
        />

        {/* 입력창 */}
        <ArtistContainer>
          <Title>아티스트</Title>
          {handler.info.stars.map((star, index) => (
            <ArtistItemContainer key={star.id} onPress={() => selectStar(star)}>
              <ArtistName
                onChange={() => {}}
                artist={star.name}
                group={
                  star.parentsStar.length !== 0 ? star.parentsStar[0].name : ""
                }
                textColor={styles.blackColor}
                textSize={"25"}
                margin={constants.margin01}
              />
              {supportStar !== null ? (
                supportStar.id === star.id ? (
                  <CheckButton onPress={deleteSupportStar} width={"25"} />
                ) : null
              ) : null}
            </ArtistItemContainer>
          ))}
        </ArtistContainer>
        <CommonInput
          onChange={supportPercent.onChange}
          title={"후원금"}
          placeholder={"후원금"}
          fontSize={25}
          keyboardType={"number-pad"}
          value={supportPercent.value}
        />
        <CommonInput
          onChange={supportMessage.onChange}
          title={"후원 메시지"}
          placeholder={"후원 메시지"}
          fontSize={15}
          value={supportMessage.value}
        />

        {/* */}
        <WordButton onPress={() => {}} text={"등록하기"} />
      </ScrollView>
    </BaseContainer>
  );
};

export default Support_Insert;
