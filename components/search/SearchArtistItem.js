///
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ScrollView } from "react-native";
import PropTypes from "prop-types";

///
import styles from "../../styles";
import constants from "../../constants";
import ArtistName from "../Name/ArtistName";

///
const SearchItemContainer = styled.TouchableOpacity`
  flex-direction: column;
  margin-top: ${constants.margin05};
  margin-bottom: ${constants.margin05};
`;

const SearchArtistItem = ({
  onPress = () => {},
  avatar,
  artist,
  group,
  textColor,
  textSize,
  margin
}) => {
  const [baseSize, setBaseSize] = useState({ width: 0, height: 0, x: 0, y: 0 });

  return (
    <SearchItemContainer
      onLayout={event => {
        setBaseSize(event.nativeEvent.layout);
      }}
      onPress={onPress}
    >
      <ArtistName avatar={avatar} artist={artist} group={group} />
    </SearchItemContainer>
  );
};

SearchArtistItem.propTypes = {
  onPress: PropTypes.func,
  avatar: PropTypes.string,
  artist: PropTypes.string,
  group: PropTypes.string,
  textColor: PropTypes.string,
  textSize: PropTypes.string,
  margin: PropTypes.any
};

export default SearchArtistItem;
