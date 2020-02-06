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
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin-top: ${constants.margin05};
  margin-bottom: ${constants.margin05};
`;

const TopContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Text = styled.Text`
  font-size: ${props => props.fontsize};
  color: ${props => (props.fontcolor ? props.fontcolor : styles.blackColor)};
  font-family: ${props =>
    props.fontstyle ? props.fontstyle : "NanumBarunGothicLight"};
  margin-top: ${props => (props.marginTop ? props.marginTop : 0)};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : 0)};
`;

const SearchMessageItem = ({
  onPress = () => {},
  avatar,
  username,
  lastMessage,
  date
}) => {
  const [baseSize, setBaseSize] = useState({ width: 0, height: 0, x: 0, y: 0 });

  return (
    <SearchItemContainer
      onLayout={event => {
        setBaseSize(event.nativeEvent.layout);
      }}
      onPress={onPress}
    >
      <TopContainer>
        <UserName avatar={avatar} username={username} />
        <WordButton text={"삭제"} size={20} />
      </TopContainer>
      <Text fontsize={15} marginBottom={constants.margin01}>
        {lastMessage}
      </Text>
      <Text fontsize={15} fontstyle={"NanumBarunGothicBold"}>
        {date}
      </Text>
    </SearchItemContainer>
  );
};

SearchMessageItem.propTypes = {
  onPress: PropTypes.func,
  avatar: PropTypes.any,
  username: PropTypes.any,
  lastMessage: PropTypes.any,
  date: PropTypes.any
};

export default SearchMessageItem;
