/// Import
import React, { useState, useEffect } from "react";
import { Text, ScrollView, Image } from "react-native";
import styled from "styled-components";
import styles from "../../../styles";
import typeDef from "../../../typeDef";
import constants from "../../../constants";
import useInput from "../../../hooks/useInput";
import useInputDate from "../../../hooks/useInputDate";
import { calcPercentToStr } from "../../../func/calc/numberCalc";

/// Components
import HeaderBase from "../../../components/Header/HeaderBase";
import HeaderStyles from "../../../components/Header/HeaderStyles";
import WordButton from "../../../components/Button/WordButton";
import CancelButton_Absolute from "../../../components/Button/CancelButton_Absolute";
import CancelButton from "../../../components/Button/CancelButton";
import RectangleButton from "../../../components/Button/RectangleButton";
import CommonInput from "../../../components/Input/CommonInput";
import DateInput from "../../../components/Input/DateInput";
import ProductItem from "../../../components/Item/ProductItem";
import SupportItem from "../../../components/Item/SupportItem";
import ArtistName from "../../../components/Name/ArtistName";

/// Container
const BaseContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const VerticalContainer = styled.View`
  flex-direction: column;
  width: ${constants.width * 0.9};
`;

const HorizontalContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

/// Cover
const CoverContainer = styled.View`
  flex-direction: column;
  width: ${constants.width};
  height: ${constants.width};
`;

const Cover = styled.Image`
  width: 100%;
  height: 100%;
`;

/// Artist
const ArtistContainer = styled.View`
  flex-direction: column;
  width: 90%;
`;

const ArtistItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 15;
  font-family: NanumBarunGothicLight;
  margin-bottom: ${constants.margin01};
`;

const Goods_Write_Form = ({ navigation }) => {
  /// ------------------------ navigation parmeter
  const type = navigation.getParam("type", "");

  /// ------------------------ state
  /// size
  const [baseSize, setBaseSize] = useState({ width: 0, height: 0, x: 0, y: 0 });

  /// upload Goods info
  const infoTitle = useInput("");
  const infoDesc = useInput("");
  const infoStartDate = useInputDate({});
  const infoEndDate = useInputDate({});
  const infoMinOrder = useInput("");
  const infoMaxOrder = useInput("");

  const [info, setInfo] = useState({
    coverFile: styles.TempImage1,
    stars: [
      {
        id: "ck53el4zx0j8m0b09vih7zo2x",
        name: "지민",
        engName: "Jimin",
        avatar: styles.TempImage1,
        parentsStar: [
          {
            id: "ck53dgccm0gt40b09w00ahmp4",
            name: "방탄소년단",
            engName: "BTS",
            jopType: "가수"
          }
        ],
        jopType: "가수"
      },

      {
        id: "ck53elpzo0j9g0b09qow5m66p",
        name: "정국",
        engName: "Jungkook",
        avatar: styles.TempImage1,
        parentsStar: [
          {
            id: "ck53dgccm0gt40b09w00ahmp4",
            name: "방탄소년단",
            engName: "BTS",
            jopType: "가수"
          }
        ],
        jopType: "가수"
      },

      {
        id: "ck53encf3fw750b004fxh8q98",
        name: "청하",
        engName: "Chung-ha",
        avatar: styles.TempImage1,
        parentsStar: [],
        jopType: "가수"
      }
    ],
    orderTime: {
      startDate: "2020-01-07T04:59:55.935Z",
      endDate: "2020-01-18T04:59:55.935Z"
    },
    products: [
      {
        title: "포토카드",
        description: "완전잘나온 포토카드",
        files: [
          "http://cafefiles.naver.net/MjAxOTAyMjVfMTg1/MDAxNTUxMDI2MjkzNTc5.nbg837i3pJY7kfHrgrSIaVsMRfdjbpeW7fnNQhatyUkg.AL3u5BWbW79utUdRrb6-JwYJdt4NTLvozACXQyCYyMYg.JPEG.paranelf07/externalFile.jpg",
          "http://imgnews.naver.net/image/112/2020/01/04/202001042332257758574_20200104233259_03_20200104234104392.jpg"
        ],
        price: 10000,
        quantity: 50
      },
      {
        title: "포토북",
        description: "대박 포토북",
        files: [
          "http://imgnews.naver.net/image/609/2019/11/08/201911081335411110_1_20191108134918978.jpg",
          "http://imgnews.naver.net/image/609/2019/01/03/201901030821020710_1_20190103082915720.jpg"
        ],
        price: 12000,
        quantity: 40
      }
    ],
    support: {
      id: "ck53mzde10zfk0b0939rlxm9y",
      files: [
        "https://wegoods.s3.ap-northeast-2.amazonaws.com/test/rlqn2.png      "
      ],
      title: "아이들의 추운 겨울이 따듯하길.....",
      organization: "푸른하늘지역아동센터",
      collection: 560000,
      target: 1400000,
      status: 0
    },
    supportStar: {
      id: "ck53elpzo0j9g0b09qow5m66p",
      name: "정국",
      engName: "Jungkook",
      parentsStar: [
        {
          id: "ck53dgccm0gt40b09w00ahmp4",
          name: "방탄소년단",
          engName: "BTS"
        }
      ]
    },
    supportPercent: 50,
    supportMessage: "응원합니다."
    // 일단 위 temp 데이터로 확인 중
    //coverFiles: "",
    //stars: [],
    //orderTime: { startDate: "", endDate: "" },
    //products: [],
    //support: null,
    //supportStar: null,
    //supportPercent: null
    //supportMessage: ""
  });
  const infoHandler = { info, setInfo };

  /// ------------------------ function

  /// 표지 등록

  /// 현재 등록된 표지 삭제
  const deleteCoverFile = async () => {
    if (info.coverFile !== "") {
      /// 우선 object 복사
      const deletedResult = Object.assign({}, info);
      deletedResult.coverFile = "";
      setInfo(deletedResult);
    }
  };

  /// 등록된 Star 삭제
  const deleteStar = async delteIndex => {
    if (info.stars.length !== 0) {
      /// 우선 object 복사
      const deletedResult = Object.assign({}, info);
      // 해당 star 삭제
      deletedResult.stars = deletedResult.stars.filter((element, index) => {
        return index !== delteIndex;
      });
      setInfo(deletedResult);
    }
  };
  /// 등록된 product 삭제
  const deleteProduct = async delteIndex => {
    if (info.products.length !== 0) {
      /// 우선 object 복사
      const deletedResult = Object.assign({}, info);
      // 해당 product 삭제
      deletedResult.products = deletedResult.products.filter(
        (element, index) => {
          return index !== delteIndex;
        }
      );
      setInfo(deletedResult);
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
          { object: HeaderStyles.BACK, link: () => navigation.goBack() }
        ]}
      />
      {/************* 본문 *************/}
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
        contentContainerStyle={{
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        {/* 표지 */}
        {info.coverFile !== "" ? (
          <CoverContainer>
            <Cover source={{ uri: info.coverFile }} />
            <CancelButton_Absolute
              onPress={deleteCoverFile}
              width={styles.headerHeight}
            />
          </CoverContainer>
        ) : null}
        <RectangleButton
          onPress={() => navigation.navigate("PhotoNavigation")}
          text={info.coverFile === "" ? "표지 등록" : "표지"}
        />

        {/* 입력창 */}
        <CommonInput
          onChange={infoTitle.onChange}
          title={"제목"}
          placeholder={"제목"}
          fontSize={50}
          multiline={true}
          returnKeyType={"next"}
          width={constants.width * 0.9}
        />

        {type === typeDef.GOODS_WRITE_COMMON ? (
          <VerticalContainer>
            <HorizontalContainer>
              <DateInput
                dateHandler={infoStartDate}
                title={"주문시작"}
                fontSize={25}
                width={constants.width * 0.4}
              />
              <DateInput
                dateHandler={infoEndDate}
                title={"주문마감"}
                fontSize={25}
                width={constants.width * 0.4}
              />
            </HorizontalContainer>
            <HorizontalContainer>
              <CommonInput
                onChange={infoMinOrder.onChange}
                title={"최소주문수"}
                placeholder={"-"}
                fontSize={25}
                keyboardType={"number-pad"}
                width={constants.width * 0.4}
              />
              <CommonInput
                onChange={infoMaxOrder.onChange}
                title={"최대주문수"}
                placeholder={"-"}
                fontSize={25}
                keyboardType={"number-pad"}
                width={constants.width * 0.4}
              />
            </HorizontalContainer>
          </VerticalContainer>
        ) : null}

        <CommonInput
          onChange={infoDesc.onChange}
          title={"소개"}
          placeholder={"소개"}
          fontSize={15}
          multiline={true}
          returnKeyType={"next"}
          width={constants.width * 0.9}
        />

        {/* 아티스트 입력창 */}
        <ArtistContainer>
          <Title>아티스트</Title>
          {info.stars.map((star, index) => (
            <ArtistItemContainer key={star.id}>
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
              <CancelButton onPress={() => deleteStar(index)} width={"25"} />
            </ArtistItemContainer>
          ))}
        </ArtistContainer>

        {/* 아티스트 선택 */}
        <RectangleButton
          onPress={() =>
            navigation.push("GoodsSearchNavigation", {
              fromScreen: navigation.state.routeName,
              type: styles.SearchType_Artist,
              handler: infoHandler
            })
          }
          text={info.stars.length === 0 ? "아티스트 선택" : "아티스트"}
        />

        {/* 상품 등록 */}
        {info.products.map((product, index) => (
          <ProductItem
            key={index}
            src={product.files}
            title={product.title}
            desc={product.description}
            price={product.price.toString()}
            isCancel={true}
            cancelWidth={styles.headerHeight}
            cancelPress={() => deleteProduct(index)}
          />
        ))}
        <RectangleButton
          onPress={() =>
            navigation.push("Goods_Insert_Product", {
              type,
              fromScreen: navigation.state.routeName,
              handler: infoHandler
            })
          }
          text={info.products.length === 0 ? "상품 등록" : "상품"}
        />

        {/* 서포트 등록 */}
        {info.support !== null ? (
          <SupportItem
            cover={info.support.files[0]}
            organization={info.support.organization}
            percent={calcPercentToStr(
              info.support.collection,
              info.support.target
            )}
            title={info.support.title}
            supportStatus={info.support.status}
          />
        ) : null}

        <RectangleButton
          onPress={() =>
            navigation.push("Support_Insert", {
              fromScreen: navigation.state.routeName,
              handler: infoHandler
            })
          }
          text={info.support === null ? "서포트 등록" : "서포트"}
        />

        {/* 게시하기 */}
        <WordButton onPress={() => {}} text={"게시하기"} />
      </ScrollView>
    </BaseContainer>
  );
};

export default Goods_Write_Form;
