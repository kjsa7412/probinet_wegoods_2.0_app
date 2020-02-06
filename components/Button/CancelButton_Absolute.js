///
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

///
import styles from "../../styles";
import constants from "../../constants";

/// Container
const Touchable = styled.TouchableOpacity``;

const AbsoluteContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  position: absolute;
`;

const CancelContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${props => (props.width ? props.width : styles.headerHeight)};
  height: ${props => (props.width ? props.width : styles.headerHeight)};
  position: absolute;
`;

/// Item
const Cancel = styled.Image`
  width: 50%;
  height: 50%;
`;

const CancelButton_Absolute = ({ onPress, width, type }) => {
  return (
    <AbsoluteContainer>
      <CancelContainer onPress={onPress} width={width}>
        {type === "white" ? (
          <Cancel
            source={require("../../assets/iconmonstr-x-mark-white.png")}
          />
        ) : (
          <Cancel
            source={require("../../assets/iconmonstr-x-mark-wegoods.png")}
          />
        )}
      </CancelContainer>
    </AbsoluteContainer>
  );
};

CancelButton_Absolute.propTypes = {
  onPress: PropTypes.func,
  width: PropTypes.any,
  type: PropTypes.string
};

export default CancelButton_Absolute;
