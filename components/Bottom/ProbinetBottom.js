///
import React from "react";
import styled from "styled-components";
import { ScrollView } from "react-native";
import PropTypes from "prop-types";

///
import styles from "../../styles";
import constants from "../../constants";

/// Container
const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${constants.width}
  height: ${constants.width * 0.2}
`;

/// Item
const Contents = styled.Text`
  font-size: 10;
  font-family: NanumBarunGothicLight;
`;

const ProbinetBottom = ({}) => {
  return (
    <Container>
      <Contents>Copyright. Probinet Crop. All rights reserved.</Contents>
    </Container>
  );
};

ProbinetBottom.propTypes = {};

export default ProbinetBottom;
