///
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ScrollView, AsyncStorage } from "react-native";
import PropTypes from "prop-types";

// Query
import { useQuery } from "react-apollo-hooks";
import { SEARCH_STAR, SEE_ALL_STAR } from "./Search_Queries";

///
import styles from "../../styles";
import constants from "../../constants";
import SearchArtistItem from "./SearchArtistItem";
import Loader from "../Loader";

///
const SearchContainer = styled.View`
  flex-direction: column;
  width: 100%;
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

const SearchArtist = ({
  titleColor,
  type,
  handler,
  term = "",
  history = {},
  onPress = () => {}
}) => {
  /// ------------------------ state
  /// Size
  const [baseSize, setBaseSize] = useState({ width: 0, height: 0, x: 0, y: 0 });

  /// ------------------------ mutation/useQuery
  /// 스타 검색
  let searchedStar = useQuery(SEARCH_STAR, {
    variables: { term },
    fetchPolicy: "network-only"
  });
  /// 스타 전체
  let seeAllStar = useQuery(SEE_ALL_STAR, {
    fetchPolicy: "network-only"
  });

  /// ------------------------ function
  /// Item 을 선택했을 경우
  const select = async value => {
    /// 최근 검색대상으로 저장이 필요하다.

    /// history copy
    const historyResult = Object.assign({}, history);

    /// 각 Search 별로 선택시 동작을 다르게 한다.
    switch (type) {
      /// Main
      case styles.SearchType_Artist_Main:
        /// value 로 star obj 가 넘어 온다.
        /// ------------------------ data setting
        handler.setStarId(value.id);

        /// ------------------------ history setting
        /// history 삽입 (기존에 있는 경우는 없애고 가장 앞에 넣는다.)
        /// 갯수는 4개로 제한한다.
        historyResult.stars = historyResult.stars
          .filter(element => {
            return element.id !== value.id;
          })
          .slice(0, 3);
        historyResult.stars.unshift(value);

        /// ------------------------ navigate
        onPress();

        break;
      /// Artist
      case styles.SearchType_Artist:
        /// value 로 star obj 가 넘어 온다.
        /// ------------------------ data setting

        /// 기존에 들어가 있는지 아닌지 판별해서 사용 한다.
        if (
          handler.info.stars.findIndex(element => element.id === value.id) ===
          -1
        ) {
          const infoResult = Object.assign({}, handler.info);
          infoResult.stars.push(value);
          handler.setInfo(infoResult);
        }

        /// ------------------------ history setting
        /// history 삽입 (기존에 있는 경우는 없애고 가장 앞에 넣는다.)
        /// 갯수는 4개로 제한한다.
        historyResult.stars = historyResult.stars
          .filter(element => {
            return element.id !== value.id;
          })
          .slice(0, 3);
        historyResult.stars.unshift(value);

        /// ------------------------ navigate
        onPress();

        break;
      default:
      // code block
    }

    /// AsyncStorage 에 삽입
    await AsyncStorage.setItem("SearchHistory", JSON.stringify(historyResult));
  };

  return term.length === 0 ? (
    <SearchContainer
      onLayout={event => {
        setBaseSize(event.nativeEvent.layout);
      }}
    >
      <TitleContainer>
        <Title titleColor={titleColor}>최근검색</Title>
      </TitleContainer>

      {history.stars.length !== 0
        ? /// ------------------------ Star
          history.stars.map(star => (
            <SearchArtistItem
              key={star.id}
              avatar={styles.TempImage1}
              artist={star.name}
              group={
                star.parentsStar.length !== 0 ? star.parentsStar[0].name : ""
              }
              onPress={() => select(star)}
            />
          ))
        : null}
      <TitleContainer>
        <Title titleColor={titleColor}>전체</Title>
      </TitleContainer>

      {seeAllStar.loading ? (
        <TitleContainer>
          <Loader />
        </TitleContainer>
      ) : seeAllStar.data !== undefined &&
        seeAllStar.data.seeAllStar !== undefined &&
        seeAllStar.data.seeAllStar !== null &&
        seeAllStar.data.seeAllStar.length !== 0 ? (
        seeAllStar.data.seeAllStar.map(star => (
          <SearchArtistItem
            key={star.id}
            avatar={styles.TempImage1}
            artist={star.name}
            group={
              star.parentsStar.length !== 0 ? star.parentsStar[0].name : ""
            }
            onPress={() => select(star)}
          />
        ))
      ) : null}
    </SearchContainer>
  ) : (
    <SearchContainer
      onLayout={event => {
        setBaseSize(event.nativeEvent.layout);
      }}
    >
      {/* 검색 했을 때 결과 */}
      {searchedStar.loading ? (
        <TitleContainer>
          <Loader />
        </TitleContainer>
      ) : searchedStar.data.searchStar === null ||
        searchedStar.data.searchStar.length === 0 ? (
        <TitleContainer>
          <Title titleColor={titleColor}>검색 결과가 없습니다</Title>
        </TitleContainer>
      ) : (
        searchedStar.data.searchStar.map(star => (
          <SearchArtistItem
            key={star.id}
            avatar={styles.TempImage1}
            artist={star.name}
            group={
              star.parentsStar.length !== 0 ? star.parentsStar[0].name : ""
            }
            onPress={() => select(star)}
          />
        ))
      )}
    </SearchContainer>
  );
};

SearchArtist.propTypes = {
  titleColor: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handler: PropTypes.object.isRequired,
  term: PropTypes.string,
  history: PropTypes.object
};

export default SearchArtist;
