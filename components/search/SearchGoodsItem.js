///
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ScrollView } from "react-native";
import PropTypes from "prop-types";

///
import styles from "../../styles";
import constants from "../../constants";

///
const SearchItemContainer = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: ${constants.margin05};
  margin-bottom: ${constants.margin05};
`;

const TopContainer = styled.View`
  flex-direction: column;
  margin-bottom: ${constants.margin01};
`;

const BottomContainer = styled.View`
  flex-direction: row;
`;

const ItemContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${props => (props.size ? props.size : "0")};
  height: ${props => (props.size ? props.size : "0")};
  margin-left: ${constants.margin01};
  margin-right: ${constants.margin01};
`;

const ItemName = styled.Text`
  font-size: 30;
  font-family: NanumBarunGothicBold;
  text-align: center;
`;

const Item = styled.Image`
  width: 100%;
  height: 100%;
`;

const SearchGoodsItem = ({ onPress = () => {}, itemName, itemSrc }) => {
  const [baseSize, setBaseSize] = useState({ width: 0, height: 0, x: 0, y: 0 });

  return (
    <SearchItemContainer
      onLayout={event => {
        setBaseSize(event.nativeEvent.layout);
      }}
      onPress={onPress}
    >
      <TopContainer>
        <ItemName>{itemName}</ItemName>
      </TopContainer>
      <BottomContainer>
        {itemSrc !== undefined && itemSrc.length !== 0
          ? itemSrc.map((value, index) => (
              <ItemContainer key={index} size={baseSize.width * 0.3}>
                <Item source={{ uri: value }} />
              </ItemContainer>
            ))
          : null}
      </BottomContainer>
    </SearchItemContainer>
  );
};

SearchGoodsItem.propTypes = {
  onPress: PropTypes.func,
  itemName: PropTypes.string,
  itemSrc: PropTypes.array
};

export default SearchGoodsItem;
