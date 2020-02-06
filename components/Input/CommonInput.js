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

const Line = styled.View`
  border: 0.5px solid #999999
  border-top-width: 0.5;
  width: 100%;
`;

const CommonInput = ({
  onChange = () => {},
  title,
  placeholder,
  fontSize,
  multiline,
  returnKeyType,
  keyboardType,
  width,
  desc,
  value = null
}) => {
  return (
    <Container width={width}>
      <Title>{title}</Title>
      <BaseInput
        onChange={onChange}
        placeholder={placeholder}
        fontSize={fontSize}
        multiline={multiline}
        returnKeyType={returnKeyType}
        keyboardType={keyboardType}
        width={width}
        isLine={true}
        desc={desc}
        value={value}
      />
    </Container>
  );
};

CommonInput.propTypes = {
  onChange: PropTypes.func,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  fontSize: PropTypes.number,
  multiline: PropTypes.bool,
  returnKeyType: PropTypes.string,
  keyboardType: PropTypes.string,
  desc: PropTypes.string
};

export default CommonInput;
