/// Import
import React, { useState, useEffect } from "react";
import { Text, ScrollView, View, AsyncStorage } from "react-native";
import styled from "styled-components";
import styles from "../../styles";
import typeDef from "../../typeDef";
import constants from "../../constants";
import useInput from "../../hooks/useInput";

// Query
import { useQuery } from "react-apollo-hooks";

/// Components
import HeaderBase from "../../components/Header/HeaderBase";
import HeaderStyles from "../../components/Header/HeaderStyles";
import SearchInput from "../../components/Input/SearchInput";

import SearchMessageItem from "../../components/Item/SearchMessageItem";

import SearchArtist from "../../components/search/SearchArtist";
import SearchGoods from "../../components/search/SearchGoods";
import SearchUser from "../../components/search/SearchUser";

/// Styled Components

///
const BaseContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.baseColor};
`;

const TitleContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

///
const Title = styled.Text`
  font-size: 15;
  font-family: NanumBarunGothicLight;
  color: ${props => props.titleColor};
  margin-top: ${constants.margin05};
  margin-bottom: ${constants.margin05};
`;

const Search = ({ navigation }) => {
  /// ------------------------ navigation parmeter
  const type = navigation.getParam("type", "");
  const fromScreen = navigation.getParam("fromScreen", "");
  const handler = navigation.getParam("handler", {});

  /// ------------------------ state
  /// size
  const [baseSize, setBaseSize] = useState({ width: 0, height: 0, x: 0, y: 0 });

  /// 검색어
  const term = useInput("");

  // 선택된 StarId
  const [starId, setStarId] = useState("");

  /// History (최근 검색)
  const [history, setHistory] = useState({
    stars: [],
    goodses: [],
    posts: [],
    supports: [],
    users: []
  });

  /// 검색 type 설정
  let leftItem = [];
  let centerItem = [];
  let rightItem = [];

  let itemType;
  let isWhite = false;
  let baseColor = styles.whiteColor;
  let titleColor = styles.blackColor;

  /// ------------------------ state setting
  switch (type) {
    /// Main
    case styles.SearchType_Artist_Main:
      ///
      leftItem.push({
        object: HeaderStyles.BACK_WHITE,
        link: () => navigation.navigate(fromScreen)
      });
      centerItem.push({
        object: HeaderStyles.ARTIST,
        link: () => navigation.navigate(fromScreen)
      });
      ///
      baseColor = styles.darkWeGoodsColor;
      titleColor = styles.whiteColor;
      isWhite = true;
      itemType = typeDef.SEARCH_ITEM_ARTIST;
      break;
    /// Goods
    case styles.SearchType_Goods:
      ///
      leftItem.push({
        object: HeaderStyles.BACK,
        link: () => navigation.navigate(fromScreen)
      });
      ///
      itemType = typeDef.SEARCH_ITEM_POST;
      break;
    /// Post
    case styles.SearchType_Post:
      ///
      leftItem.push({
        object: HeaderStyles.BACK,
        link: () => navigation.navigate(fromScreen)
      });
      ///
      itemType = typeDef.SEARCH_ITEM_POST;
      break;
    /// Support
    case styles.SearchType_Support:
      ///
      leftItem.push({
        object: HeaderStyles.BACK,
        link: () => navigation.navigate(fromScreen)
      });
      ///
      itemType = typeDef.SEARCH_ITEM_POST;
      break;
    /// User
    case styles.SearchType_User:
      ///
      leftItem.push({
        object: HeaderStyles.BACK,
        link: () => navigation.navigate(fromScreen)
      });
      ///
      itemType = typeDef.SEARCH_ITEM_USER;
      break;
    /// Artist
    case styles.SearchType_Artist:
      ///
      leftItem.push({
        object: HeaderStyles.BACK_WHITE,
        link: () => navigation.navigate(fromScreen)
      });
      ///
      baseColor = styles.darkWeGoodsColor;
      titleColor = styles.whiteColor;
      isWhite = true;
      itemType = typeDef.SEARCH_ITEM_ARTIST;
      break;
    default:
    // code block
  }

  /// ------------------------ function

  /// 처음에 로드 될 것들
  /// history load
  const preLoad = async () => {
    try {
      const searchHistory = await AsyncStorage.getItem("SearchHistory");
      if (searchHistory !== null) {
        setHistory(JSON.parse(searchHistory));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    preLoad();
  }, []);

  return (
    <BaseContainer
      onLayout={event => {
        setBaseSize(event.nativeEvent.layout);
      }}
      baseColor={baseColor}
    >
      <HeaderBase
        leftItem={leftItem}
        centerItem={centerItem}
        rightItem={rightItem}
      />
      <SearchInput
        onChange={term.onChange}
        isWhite={isWhite}
        value={term.value}
        cancelOnPress={() => term.setValue("")}
      />
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={{ width: "80%" }}
        contentContainerStyle={{
          flexDirection: "column",
          alignItems: "flex-start"
        }}
      >
        {type === styles.SearchType_Artist_Main ||
        type === styles.SearchType_Artist ? (
          <SearchArtist
            titleColor={titleColor}
            type={type}
            term={term.value}
            history={history}
            handler={handler}
            onPress={() => navigation.navigate(fromScreen)}
          />
        ) : type === styles.SearchType_Goods ? (
          <SearchGoods
            titleColor={titleColor}
            type={type}
            term={term.value}
            history={history}
            handler={handler}
            onPress={() => navigation.navigate(fromScreen)}
          />
        ) : type === styles.SearchType_User ? (
          <SearchUser
            titleColor={titleColor}
            type={type}
            term={term.value}
            history={history}
            handler={handler}
            onPress={() => navigation.navigate(fromScreen)}
          />
        ) : null}
      </ScrollView>
    </BaseContainer>
  );
};

export default Search;
