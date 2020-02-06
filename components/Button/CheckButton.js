///
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

///
import styles from "../../styles";
import constants from "../../constants";

/// Container
const CheckContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${props => (props.width ? props.width : styles.headerHeight)};
  height: ${props => (props.width ? props.width : styles.headerHeight)};
`;

/// Item
const Check = styled.Image`
  width: 50%;
  height: 50%;
`;

const CheckButton = ({ onPress, width }) => {
  return (
    <CheckContainer onPress={onPress} width={width} height={width}>
      <Check source={require("../../assets/iconmonstr-check-mark-4-240.png")} />
    </CheckContainer>
  );
};

CheckButton.propTypes = {
  onPress: PropTypes.func,
  width: PropTypes.any
};

export default CheckButton;
