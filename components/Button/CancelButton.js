///
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

///
import styles from "../../styles";
import constants from "../../constants";

/// Container
const CancelContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${props => (props.width ? props.width : styles.headerHeight)};
  height: ${props => (props.width ? props.width : styles.headerHeight)};
`;

/// Item
const Cancel = styled.Image`
  width: 50%;
  height: 50%;
`;

const CancelButton = ({ onPress, width }) => {
  return (
    <CancelContainer onPress={onPress} width={width} height={width}>
      <Cancel source={require("../../assets/iconmonstr-x-mark-wegoods.png")} />
    </CancelContainer>
  );
};

CancelButton.propTypes = {
  onPress: PropTypes.func,
  width: PropTypes.any
};

export default CancelButton;
