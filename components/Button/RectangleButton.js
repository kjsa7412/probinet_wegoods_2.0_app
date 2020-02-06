///
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

///
import styles from "../../styles";
import constants from "../../constants";

/// Container
const Container = styled.TouchableOpacity`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${constants.margin05};
  margin-bottom: ${constants.margin05};
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  width: ${constants.width * 0.9};
  height: ${constants.width * 0.13};
  background-color: ${styles.weGoodsColor};
`;

const ButtonText = styled.Text`
  font-size: 30;
  font-family: NanumBarunGothicBold;
  color: ${styles.whiteColor};
`;

const Desc = styled.Text`
  text-align: center;
  font-size: 10;
  font-family: NanumBarunGothicLight;
  color: ${styles.darkGreyColor};
  margin-top: ${constants.margin01};
`;

const RectangleButton = ({ onPress, text, desc }) => {
  return (
    <Container onPress={onPress}>
      <ButtonContainer>
        <ButtonText>{text}</ButtonText>
      </ButtonContainer>
      {desc === undefined ? null : <Desc>{desc}</Desc>}
    </Container>
  );
};

RectangleButton.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
  desc: PropTypes.string
};

export default RectangleButton;
