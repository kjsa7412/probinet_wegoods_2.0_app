///
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ScrollView } from "react-native";
import PropTypes from "prop-types";

///
import styles from "../../styles";
import constants from "../../constants";
import UserName from "../Name/UserName";
import WordButton from "../Button/WordButton";

///
const SearchItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${constants.margin05};
  margin-bottom: ${constants.margin05};
  width: 100%;
`;

const SearchUserItem = ({
  onPress = () => {},
  avatar,
  username,
  isFollowing = false
}) => {
  const [baseSize, setBaseSize] = useState({ width: 0, height: 0, x: 0, y: 0 });

  return (
    <SearchItemContainer
      onLayout={event => {
        setBaseSize(event.nativeEvent.layout);
      }}
      onPress={onPress}
    >
      <UserName onPress={onPress} avatar={avatar} username={username} />
      {isFollowing ? (
        <WordButton text={"언팔로우"} size={20} />
      ) : (
        <WordButton text={"팔로우"} size={20} />
      )}
    </SearchItemContainer>
  );
};

SearchUserItem.propTypes = {
  onPress: PropTypes.func,
  avatar: PropTypes.string,
  username: PropTypes.string,
  isFollowing: PropTypes.bool
};

export default SearchUserItem;
