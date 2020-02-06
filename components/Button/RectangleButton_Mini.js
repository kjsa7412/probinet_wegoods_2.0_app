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
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  width: ${constants.width * 0.2};
  height: ${constants.width * 0.08};
  background-color: ${styles.weGoodsColor};
`;

const ButtonText = styled.Text`
  font-size: 10;
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

const RectangleButton_Mini = ({ onPress, text, desc }) => {
  return (
    <Container onPress={onPress}>
      <ButtonContainer>
        <ButtonText>{text}</ButtonText>
      </ButtonContainer>
      {desc === undefined ? null : <Desc>{desc}</Desc>}
    </Container>
  );
};

RectangleButton_Mini.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
  desc: PropTypes.string
};

export default RectangleButton_Mini;
