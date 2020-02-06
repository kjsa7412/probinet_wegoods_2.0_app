///
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ScrollView, AsyncStorage } from "react-native";
import PropTypes from "prop-types";

// Query
import { useQuery } from "react-apollo-hooks";
import { SEARCH_USER } from "./Search_Queries";

///
import styles from "../../styles";
import constants from "../../constants";
import SearchUserItem from "./SearchUserItem";
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

const SearchUser = ({
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
  /// User 검색
  let searchedUser = useQuery(SEARCH_USER, {
    variables: { term },
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
      case styles.SearchType_User:
        /// value 로 user obj 가 넘어 온다.
        /// ------------------------ data setting

        /// ------------------------ history setting
        /// history 삽입 (기존에 있는 경우는 없애고 가장 앞에 넣는다.)
        /// 갯수는 4개로 제한한다.
        historyResult.users = historyResult.users
          .filter(element => {
            return element.id !== value.id;
          })
          .slice(0, 3);
        historyResult.users.unshift(value);

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

      {history.users.length !== 0
        ? /// ------------------------ Star
          history.users.map(user => (
            <SearchUserItem
              key={user.id}
              onPress={() => select(user)}
              avatar={user.avatar}
              username={user.username}
              isFollowing={user.isFollowing}
            />
          ))
        : null}
    </SearchContainer>
  ) : (
    <SearchContainer
      onLayout={event => {
        setBaseSize(event.nativeEvent.layout);
      }}
    >
      {/* 검색 했을 때 결과 */}
      {searchedUser.loading ? (
        <TitleContainer>
          <Loader />
        </TitleContainer>
      ) : searchedUser.data.searchUser === null ||
        searchedUser.data.searchUser === undefined ||
        searchedUser.data.searchUser.length === 0 ? (
        <TitleContainer>
          <Title titleColor={titleColor}>검색 결과가 없습니다</Title>
        </TitleContainer>
      ) : (
        searchedUser.data.searchUser.map(user => (
          <SearchUserItem
            key={user.id}
            onPress={() => select(user)}
            avatar={user.avatar}
            username={user.username}
            isFollowing={user.isFollowing}
          />
        ))
      )}
    </SearchContainer>
  );
};

SearchUser.propTypes = {
  titleColor: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handler: PropTypes.object.isRequired,
  term: PropTypes.string,
  history: PropTypes.object
};

export default SearchUser;
