///
import React from "react";
import styled from "styled-components";
import { ScrollView } from "react-native";
import PropTypes from "prop-types";

///
import styles from "../../styles";
import constants from "../../constants";

/// Container
const Touchable = styled.TouchableOpacity``;

const BaseContainer = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const CoverContainer = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: ${constants.width - constants.margin10};
  height: ${constants.width * 0.85};
  margin-top: ${constants.margin05};
`;

const AvatarContainer = styled.View`
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: ${constants.width - constants.margin10};
  height: ${constants.width * 0.85};
  margin-top: ${constants.margin05};
  position: absolute;
`;

const AvatarContainer_Inner = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${constants.width * 0.3};
  height: ${constants.width * 0.3};
  border-radius: ${constants.width * 0.15};
  background-color: ${styles.whiteColor};
`;

const UsernameContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${constants.width - constants.margin10};
  margin-top: ${constants.margin02};
  margin-bottom: ${constants.margin02};
`;

const BioContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${constants.width - constants.margin10};
  margin-top: ${constants.margin02};
  margin-bottom: ${constants.margin02};
`;

/// Item
const Cover = styled.Image`
  width: ${constants.width - constants.margin10};
  height: ${constants.width * 0.7};
  background-color: ${styles.greyColor};
`;

const Avatar = styled.Image`
  width: 95%;
  height: 95%;
  border-radius: ${constants.width * 0.15};
  background-color: ${styles.greyColor};
`;

const Username = styled.Text`
  font-size: 50;
  text-align: center;
  font-family: NanumBarunGothicBold;
`;

const Bio = styled.Text`
  font-size: 15;
  text-align: center;
  font-family: NanumBarunGothicLight;
`;

const TopProfile = ({ cover, avatar, username, bio }) => {
  return (
    <BaseContainer>
      <CoverContainer>
        <Cover source={{ uri: cover }} />
      </CoverContainer>
      <AvatarContainer>
        <AvatarContainer_Inner>
          <Avatar source={{ uri: avatar }} />
        </AvatarContainer_Inner>
      </AvatarContainer>
      <UsernameContainer>
        <Username>{username}</Username>
      </UsernameContainer>
      <BioContainer>
        <Bio>{bio}</Bio>
      </BioContainer>
    </BaseContainer>
  );
};

TopProfile.propTypes = {
  cover: PropTypes.string,
  avatar: PropTypes.string,
  username: PropTypes.string,
  bio: PropTypes.string
};

export default TopProfile;
