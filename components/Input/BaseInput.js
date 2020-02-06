///
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";

///
import styles from "../../styles";
import constants from "../../constants";

/// Container
const Container = styled.View`
  flex-direction: column;
  width: ${props => (props.width ? props.width : "100%")};
`;

const TextInput = styled.TextInput`
  font-family: ${props =>
    props.fontType ? props.fontType : "NanumBarunGothicBold"};
  width: ${props => (props.width ? props.width : "100%")};
  text-align: ${props => (props.align ? props.align : "left")};
  font-size: ${props => (props.fontSize ? props.fontSize : "50")};
  color: ${props => (props.color ? props.color : styles.blackColor)};
`;

const Line = styled.View`
  border: 0.5px solid
  border-color: ${props =>
    props.lineColor ? props.lineColor : styles.darkGreyColor};
  border-top-width: 0.5;
  width: 100%;
`;

const Desc = styled.Text`
  font-size: 10;
  font-family: NanumBarunGothicLight;
  color: ${styles.darkGreyColor};
  margin-top: ${constants.margin01};
`;

const BaseInput = ({
  onChange = () => {},
  autoCapitalize = "none",
  autoCorrect = false,
  keyboardType = "default",
  multiline = false,
  placeholder = "",
  placeholderTextColor = null,
  returnKeyType = "done",
  onSubmitEditing = () => null,
  secureTextEntry = false,
  maxLength = null,
  value = null,
  width,
  align,
  fontSize,
  color,
  lineColor,
  isLine = false,
  desc,
  fontType
}) => {
  return (
    <Container width={width}>
      <TextInput
        onChangeText={onChange}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        keyboardType={keyboardType}
        multiline={multiline}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        returnKeyType={returnKeyType}
        onSubmitEditing={onSubmitEditing}
        secureTextEntry={secureTextEntry}
        maxLength={maxLength}
        value={value}
        width={width}
        align={align}
        fontSize={fontSize}
        color={color}
        fontType={fontType}
      />
      {isLine ? <Line lineColor={lineColor} /> : null}
      {desc ? <Desc>{desc}</Desc> : null}
    </Container>
  );
};

BaseInput.propTypes = {
  onChange: PropTypes.func,
  autoCapitalize: PropTypes.oneOf(["none", "sentences", "words", "characters"]),
  autoCorrect: PropTypes.bool,
  keyboardType: PropTypes.oneOf([
    "default",
    "number-pad",
    "decimal-pad",
    "numeric",
    "email-address",
    "phone-pad",
    "visible-password"
  ]),
  multiline: PropTypes.bool,
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  returnKeyType: PropTypes.oneOf(["done", "go", "next", "search", "send"]),
  onSubmitEditing: PropTypes.func,
  secureTextEntry: PropTypes.bool,
  maxLength: PropTypes.number,
  value: PropTypes.string,
  align: PropTypes.string,
  fontSize: PropTypes.number,
  color: PropTypes.string,
  lineColor: PropTypes.string,
  isLine: PropTypes.bool,
  desc: PropTypes.string,
  fontType: PropTypes.any
};

export default BaseInput;
