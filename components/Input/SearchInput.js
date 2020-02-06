///
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

///
import styles from "../../styles";
import constants from "../../constants";

///
const BaseContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-bottom: ${constants.margin01};
`;

const TextInput = styled.TextInput`
  font-family: NanumBarunGothicBold;
  text-align: center;
  font-size: 30;
  width: 100%;
  color: ${props => (props.isWhite ? styles.whiteColor : styles.blackColor)};
`;

const Line = styled.View`
  border: 0.5px solid
  border-color: ${props =>
    props.isWhite ? styles.whiteColor : styles.blackColor};
  border-top-width: 0.5;
  width: 100%;
`;

/// Cancel
const CancelContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${styles.headerHeight};
  height: ${styles.headerHeight};
`;

const Cancel = styled.Image`
  width: 30%;
  height: 30%;
`;

const SearchInput = ({
  onChange = () => {},
  isWhite,
  value = null,
  cancelOnPress = () => {}
}) => {
  return (
    <BaseContainer>
      <TextInput
        onChangeText={onChange}
        autoCapitalize={"none"}
        autoCorrect={false}
        keyboardType={"default"}
        multiline={false}
        placeholder={"검색어를 입력해주세요"}
        placeholderTextColor={isWhite ? styles.whiteColor : null}
        returnKeyType={"done"}
        onSubmitEditing={() => {}}
        secureTextEntry={false}
        isWhite={isWhite}
        value={value}
      />
      <Line isWhite={isWhite} />
      <CancelContainer onPress={cancelOnPress}>
        <Cancel
          source={
            isWhite
              ? require("../../assets/iconmonstr-x-mark-white.png")
              : require("../../assets/iconmonstr-x-mark-black.png")
          }
        />
      </CancelContainer>
    </BaseContainer>
  );
};

SearchInput.propTypes = {
  onChange: PropTypes.func,
  isWhite: PropTypes.bool,
  value: PropTypes.string,
  cancelOnPress: PropTypes.func
};

export default SearchInput;
