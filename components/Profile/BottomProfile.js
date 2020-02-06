///
import React from "react";
import styled from "styled-components";
import { ScrollView } from "react-native";
import PropTypes from "prop-types";
import Swiper from "react-native-swiper";

///
import styles from "../../styles";
import constants from "../../constants";

/// Container
const Touchable = styled.TouchableOpacity``;

const BaseContainer = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: ${constants.width};
  margin-top: ${constants.margin05};
  margin-bottom: ${constants.margin05};
`;

const ItemContainer = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 90%
  margin-bottom: ${constants.margin05};
`;

const TextContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

const ContentsContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${constants.width - constants.margin10};
  height: ${constants.width - constants.margin10};
`;

/// Item
const Title = styled.Text`
  font-size: 30;
  text-align: left;
  font-family: NanumBarunGothicBold;
`;

const Number = styled.Text`
  font-size: 20;
  text-align: left;
  font-family: NanumBarunGothicLight;
`;

const Cover = styled.Image`
  width: 100%;
  height: 100%;
  background-color: ${styles.greyColor};
`;

const BottomProfile = ({
  navigation,
  isCreator,
  newsNumber,
  goodsNumber,
  postNumber,
  news,
  goodses,
  posts
}) => {
  let isNews = false;
  let isGoods = false;
  let isPost = false;

  if (isCreator) {
    isNews = true;
    isGoods = true;
    isPost = true;
  } else {
    isNews = false;
    isGoods = false;
    isPost = true;
  }

  return (
    <BaseContainer>
      {isNews ? (
        <ItemContainer>
          <TextContainer
            onPress={() =>
              navigation.push("Profile_News", {
                fromScreen: navigation.state.routeName
              })
            }
          >
            <Title>소식</Title>
            <Number>{newsNumber}</Number>
          </TextContainer>
          <ContentsContainer>
            <Swiper activeDotColor={"#FFFFFF"} autoplay={false}>
              {news.map(news => (
                <Touchable key={news.id}>
                  <Cover source={{ uri: news.files[0] }} />
                </Touchable>
              ))}
            </Swiper>
          </ContentsContainer>
        </ItemContainer>
      ) : null}
      {isGoods ? (
        <ItemContainer>
          <TextContainer
            onPress={() =>
              navigation.push("Goods_List", {
                fromScreen: navigation.state.routeName
              })
            }
          >
            <Title>굿즈</Title>
            <Number>{goodsNumber}</Number>
          </TextContainer>
          <ContentsContainer>
            <Swiper activeDotColor={"#FFFFFF"} autoplay={false}>
              {goodses.map(goods => (
                <Touchable key={goods.id}>
                  <Cover source={{ uri: goods.files[0] }} />
                </Touchable>
              ))}
            </Swiper>
          </ContentsContainer>
        </ItemContainer>
      ) : null}
      {isPost ? (
        <ItemContainer>
          <TextContainer
            onPress={() =>
              navigation.push("Post_List", {
                fromScreen: navigation.state.routeName
              })
            }
          >
            <Title>사진</Title>
            <Number>{postNumber}</Number>
          </TextContainer>
          <ContentsContainer>
            <Swiper activeDotColor={"#FFFFFF"} autoplay={false}>
              {posts.map(post => (
                <Touchable key={post.id}>
                  <Cover source={{ uri: post.files[0] }} />
                </Touchable>
              ))}
            </Swiper>
          </ContentsContainer>
        </ItemContainer>
      ) : null}
    </BaseContainer>
  );
};

BottomProfile.propTypes = {
  navigation: PropTypes.any,
  isCreator: PropTypes.bool,
  newsNumber: PropTypes.string,
  goodsNumber: PropTypes.string,
  postNumber: PropTypes.string,
  news: PropTypes.array,
  goodses: PropTypes.array,
  posts: PropTypes.array
};

export default BottomProfile;
