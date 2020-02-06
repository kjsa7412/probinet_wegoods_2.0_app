///
import React from "react";
import styled from "styled-components";
import { ScrollView } from "react-native";
import PropTypes from "prop-types";

///
import styles from "../../styles";
import constants from "../../constants";
import typeDef from "../../typeDef";
import UserName from "../Name/UserName";

/// func
import likeHandler from "../../func/toggleHandler/likeHandler";

/// Container
const Touchable = styled.TouchableOpacity``;

const BaseContainer = styled.View`
flex-direction: row;
justify-content: center;
align-items: center;
width: ${constants.width * 2}
height: ${constants.width + constants.margin10}
background-color: ${styles.whiteColor};
`;

const CoverContainer = styled.View`
flex-direction: row;
width: ${constants.width}
height: ${constants.width}
`;

const IconContainer = styled.View`
  flex-direction: column;
  position: absolute;
`;

const IconContainer_Inner = styled.TouchableOpacity`
flex-direction: row;
justify-content: center;
align-items: center;
width: ${constants.margin10}
height: ${constants.margin10}
`;

const ContentContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: ${constants.width - constants.margin15};
  height: ${constants.width};
  margin-left: ${constants.margin05};
`;

const BodyContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: ${constants.margin01};
  overflow: hidden;
`;

/// Item
const Icon = styled.Image`
  width: 50%;
  height: 50%;
`;

const Cover = styled.Image`
  flex: 1;
  background-color: ${styles.greyColor};
`;

const Title = styled.Text`
  font-size: 50;
  font-family: NanumBarunGothicBold;
  margin-top: ${constants.margin01};
  margin-bottom: ${constants.margin01};
`;

const Body = styled.Text`
  font-size: 15;
  font-family: NanumBarunGothicLight;
`;

const PostItem = ({
  navigation,
  id,
  cover,
  title,
  body,
  avatar,
  username,
  isLiked
}) => {
  const like = likeHandler(isLiked, typeDef.POST);

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <Touchable
        onPress={() =>
          navigation.push("Post_Detail", {
            id: id
          })
        }
      >
        <BaseContainer>
          <CoverContainer>
            <Cover source={{ uri: cover }} />
            <IconContainer>
              <IconContainer_Inner
                onPress={() => {
                  like.toggle(id);
                }}
                activeOpacity={like.activeOpacity}
              >
                <Icon
                  source={
                    like.value
                      ? require("../../assets/iconmonstr-star-wegoods.png")
                      : require("../../assets/iconmonstr-star-white.png")
                  }
                />
              </IconContainer_Inner>
            </IconContainer>
          </CoverContainer>
          <ContentContainer>
            <UserName onPress={() => {}} avatar={avatar} username={username} />
            <Title>{title}</Title>
            <BodyContainer>
              <Body>{body}</Body>
            </BodyContainer>
          </ContentContainer>
        </BaseContainer>
      </Touchable>
    </ScrollView>
  );
};

PostItem.propTypes = {
  navigation: PropTypes.any,
  id: PropTypes.string,
  cover: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  avatar: PropTypes.string,
  username: PropTypes.string,
  isLiked: PropTypes.bool
};

export default PostItem;
