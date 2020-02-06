/// Import
import React, { useState, useEffect } from "react";
import { Text, ScrollView, Image } from "react-native";
import styles from "../../../styles";
import constants from "../../../constants";
import styled from "styled-components";

// apollo
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";

/// Components
import HeaderBase from "../../../components/Header/HeaderBase";
import HeaderStyles from "../../../components/Header/HeaderStyles";
import PostItem from "../../../components/Item/PostItem";
import ProbinetBottom from "../../../components/Bottom/ProbinetBottom";
import Loader from "../../../components/Loader";

/// Styled Components
const BaseContainer = styled.View`
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

/// Query
const SEE_POST_LIST = gql`
  query seeRandomPostFromStar(
    $starId: String!
    $loadNumber: Int
    $id: [String!]
  ) {
    seeRandomPostFromStar(starId: $starId, loadNumber: $loadNumber, id: $id) {
      id
      user {
        id
        avatar
        username
      }
      files
      title
      description
      isLiked
    }
  }
`;

const Post = ({ navigation }) => {
  /// ------------------------ state
  /// size
  const [baseSize, setBaseSize] = useState({ width: 0, height: 0, x: 0, y: 0 });
  /// 설정한 starId 를 저장할 곳
  const [starId, setStarId] = useState("");

  /// ------------------------ mutation
  let postList = useQuery(SEE_POST_LIST, {
    variables: { starId, loadNumber: 5 },
    fetchPolicy: "network-only"
  });

  return (
    <BaseContainer
      onLayout={event => {
        setBaseSize(event.nativeEvent.layout);
      }}
    >
      {/* 헤더 */}
      <HeaderBase
        leftItem={[
          {
            object: HeaderStyles.PLUS,
            link: () =>
              navigation.push("PostWriteNavigation", {
                fromScreen: navigation.state.routeName
              })
          }
        ]}
        centerItem={[
          {
            object: HeaderStyles.ARTIST,
            link: () =>
              navigation.push("PostSearchNavigation", {
                fromScreen: navigation.state.routeName,
                type: styles.SearchType_Artist_Main
              })
          }
        ]}
        rightItem={[
          {
            object: HeaderStyles.SEARCH,
            link: () =>
              navigation.push("PostSearchNavigation", {
                fromScreen: navigation.state.routeName,
                type: styles.SearchType_Post
              })
          }
        ]}
      />
      <ScrollView>
        {postList.loading ? (
          <Loader />
        ) : (
          postList.data.seeRandomPostFromStar.map(post => (
            <PostItem
              navigation={navigation}
              key={post.id}
              id={post.id}
              cover={post.files[0]}
              title={post.title}
              body={post.description}
              avatar={post.user.avatar}
              username={post.user.username}
              isLiked={post.isLiked}
            />
          ))
        )}

        <ProbinetBottom />
      </ScrollView>
    </BaseContainer>
  );
};

export default Post;
