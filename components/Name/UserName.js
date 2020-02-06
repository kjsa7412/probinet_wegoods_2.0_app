///
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

///
import styles from "../../styles";
import constants from "../../constants";

///
const UsernameContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: ${props => (props.margin ? props.margin : "0")};
  margin-bottom: ${props => (props.margin ? props.margin : "0")};
`;

const Avatar = styled.Image`
  width: ${styles.Avatar1};
  height: ${styles.Avatar1};
  border-radius: ${styles.Avatar1 / 2};
  margin-right: ${constants.margin02};
`;

const Username = styled.Text`
  font-size: ${props => (props.textSize ? props.textSize : "30")};
  font-family: NanumBarunGothicBold;
  color: ${props => (props.textColor ? props.textColor : styles.blackColor)};
`;

const UserName = ({
  onPress = () => {},
  margin,
  avatar,
  username,
  textColor,
  textSize
}) => {
  return (
    <UsernameContainer onPress={onPress} margin={margin}>
      <Avatar source={{ uri: avatar }} />
      <Username textColor={textColor} textSize={textSize}>
        {username}
      </Username>
    </UsernameContainer>
  );
};

UserName.propTypes = {
  onPress: PropTypes.func,
  margin: PropTypes.any,
  avatar: PropTypes.string,
  username: PropTypes.string,
  textColor: PropTypes.string,
  textSize: PropTypes.string
};

export default UserName;
