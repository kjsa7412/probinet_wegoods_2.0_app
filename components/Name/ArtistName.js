///
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

///
import styles from "../../styles";
import constants from "../../constants";

///
const BaseContainer = styled.View`
  flex-direction: row;
  align-items: flex-end;
  margin-top: ${props => (props.marginTop ? props.marginTop : "0")};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : "0")};
`;

const Avatar = styled.Image`
  width: ${styles.Avatar1};
  height: ${styles.Avatar1};
  border-radius: ${styles.Avatar1 / 2};
  margin-right: ${constants.margin02};
`;

const Artist = styled.Text`
  font-size: ${props => (props.textSize ? props.textSize : "30")};
  font-family: NanumBarunGothicBold;
  color: ${props => (props.textColor ? props.textColor : styles.whiteColor)};
`;

const Group = styled.Text`
  font-size: ${props => (props.textSize ? props.textSize / 2 : "15")};
  font-family: NanumBarunGothicBold;
  color: ${props => (props.textColor ? props.textColor : styles.whiteColor)};
`;

const ArtistName = ({ avatar, artist, group, textColor, textSize, margin }) => {
  return (
    <BaseContainer marginTop={margin} marginBottom={margin}>
      {avatar ? <Avatar source={{ uri: avatar }} /> : null}
      <Artist textColor={textColor} textSize={textSize}>
        {artist}
      </Artist>
      <Group textColor={textColor} textSize={textSize}>
        {group}
      </Group>
    </BaseContainer>
  );
};

ArtistName.propTypes = {
  avatar: PropTypes.string,
  artist: PropTypes.string,
  group: PropTypes.string,
  textColor: PropTypes.string,
  textSize: PropTypes.string,
  margin: PropTypes.any
};

export default ArtistName;
