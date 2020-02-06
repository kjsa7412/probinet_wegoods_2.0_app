///
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import styles from "../../styles";
import constants from "../../constants";

///
import BaseInput from "./BaseInput";

/// Container
const Container = styled.View`
  flex-direction: column;
  width: ${props => (props.width ? props.width : "100%")};
  margin-top: ${constants.margin05};
  margin-bottom: ${constants.margin05};
`;

const Title = styled.Text`
  font-size: 15;
  font-family: NanumBarunGothicLight;
  margin-bottom: ${constants.margin01};
`;

const HorizontalContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const DateInput = ({ dateHandler, title, fontSize, width }) => {
  return (
    <Container width={width}>
      <Title>{title}</Title>
      <HorizontalContainer>
        <BaseInput
          onChange={dateHandler.yearOnChange}
          placeholder={"2020"}
          maxLength={4}
          fontSize={fontSize}
          keyboardType={"number-pad"}
          width={width * 0.4}
          isLine={true}
        />
        <BaseInput
          onChange={dateHandler.monthOnChange}
          placeholder={"01"}
          maxLength={2}
          fontSize={fontSize}
          keyboardType={"number-pad"}
          width={width * 0.2}
          isLine={true}
        />
        <BaseInput
          onChange={dateHandler.dayOnChange}
          placeholder={"23"}
          maxLength={2}
          fontSize={fontSize}
          keyboardType={"number-pad"}
          width={width * 0.2}
          isLine={true}
        />
      </HorizontalContainer>
    </Container>
  );
};

DateInput.propTypes = {
  dateHandler: PropTypes.object,
  title: PropTypes.string,
  fontSize: PropTypes.number
};

export default DateInput;
