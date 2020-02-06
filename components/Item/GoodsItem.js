///
import React from "react";
import styled from "styled-components";
import { ScrollView } from "react-native";
import PropTypes from "prop-types";

///
import styles from "../../styles";
import constants from "../../constants";
import UserName from "../Name/UserName";

/// func
import bookmarkHandler from "../../func/toggleHandler/bookmarkHandler";

/// Container
const Touchable = styled.TouchableOpacity``;

const BaseContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${constants.width * 2};
  height: ${constants.width + constants.margin10};
`;

const CoverContainer = styled.View`
  flex-direction: row;
  width: ${constants.width};
  height: ${constants.width};
`;

const IconContainer = styled.View`
  flex-direction: column;
  position: absolute;
`;

const IconContainer_Normal = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${constants.margin10};
  height: ${constants.margin10};
`;

const IconContainer_Touchable = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${constants.margin10};
  height: ${constants.margin10};
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

const GoodsItem = ({
  navigation,
  id,
  cover,
  title,
  body,
  avatar,
  username,
  isBookmark,
  support
}) => {
  const bookmark = bookmarkHandler(isBookmark);

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <Touchable
        onPress={() =>
          navigation.push("Goods_Detail", {
            id: id
          })
        }
      >
        <BaseContainer>
          <CoverContainer>
            <Cover source={{ uri: cover }} />
            <IconContainer>
              <IconContainer_Touchable
                onPress={() => {
                  bookmark.toggle(id);
                }}
                activeOpacity={bookmark.activeOpacity}
              >
                <Icon
                  source={
                    bookmark.value
                      ? require("../../assets/iconmonstr-star-wegoods.png")
                      : require("../../assets/iconmonstr-star-white.png")
                  }
                />
              </IconContainer_Touchable>
              <IconContainer_Normal>
                <Icon
                  source={
                    support !== null
                      ? require("../../assets/iconmonstr-tree-wegoods.png")
                      : require("../../assets/iconmonstr-tree-white.png")
                  }
                />
              </IconContainer_Normal>
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

GoodsItem.propTypes = {
  navigation: PropTypes.any,
  id: PropTypes.string,
  cover: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  avatar: PropTypes.string,
  username: PropTypes.string,
  isBookmark: PropTypes.bool,
  support: PropTypes.object
};

export default GoodsItem;
