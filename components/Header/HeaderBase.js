import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { withNavigation } from "react-navigation";
import { Text, ScrollView, Image } from "react-native";
import styles from "../../styles";
import constants from "../../constants";

/// Styled Components

/// Container
const BaseContainer = styled.View`
  flex-direction: row;
  width: ${constants.width};
  height: ${styles.headerHeight};
`;

const LeftContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: ${constants.width};
  height: ${styles.headerHeight};
  position: absolute;
`;

const CenterContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${constants.width};
  height: ${styles.headerHeight};
  position: absolute;
`;

const RightContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: ${constants.width};
  height: ${styles.headerHeight};
  position: absolute;
`;

const ItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${styles.headerHeight};
  height: ${styles.headerHeight};
`;

const HeaderBase = withNavigation(
  ({ navigation, leftItem = [], centerItem = [], rightItem = [] }) => {
    return (
      <BaseContainer>
        <LeftContainer>
          {leftItem.map(value => (
            <ItemContainer onPress={value.link} key={value.object.key}>
              <Image source={value.object.iconUri} style={value.object.style} />
            </ItemContainer>
          ))}
        </LeftContainer>
        <CenterContainer>
          {centerItem.map(value => (
            <ItemContainer onPress={value.link} key={value.object.key}>
              <Image source={value.object.iconUri} style={value.object.style} />
            </ItemContainer>
          ))}
        </CenterContainer>
        <RightContainer>
          {rightItem.map(value => (
            <ItemContainer onPress={value.link} key={value.object.key}>
              <Image source={value.object.iconUri} style={value.object.style} />
            </ItemContainer>
          ))}
        </RightContainer>
      </BaseContainer>
    );
  }
);

HeaderBase.propTypes = {
  leftItem: PropTypes.array,
  centerItem: PropTypes.array,
  rightItem: PropTypes.array
};

export default HeaderBase;
