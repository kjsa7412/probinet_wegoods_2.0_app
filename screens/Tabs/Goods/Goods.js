/// Import
import React, { useState, useEffect } from "react";
import { Text, ScrollView, Image } from "react-native";
import styled from "styled-components";
import styles from "../../../styles";
import constants from "../../../constants";

// apollo
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";

/// Components
import HeaderBase from "../../../components/Header/HeaderBase";
import HeaderStyles from "../../../components/Header/HeaderStyles";
import GoodsItem from "../../../components/Item/GoodsItem";
import ProbinetBottom from "../../../components/Bottom/ProbinetBottom";
import Loader from "../../../components/Loader";

/// Styled Components
const BaseContainer = styled.View`
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

/// Query
const SEE_GOOD_LIST = gql`
  query seeGoodsListFromStar($starId: String!) {
    seeGoodsListFromStar(starId: $starId) {
      id
      user {
        id
        avatar
        username
      }
      files
      title
      description
      isBookmarked
      support {
        id
        title
      }
    }
  }
`;

const Goods = ({ navigation }) => {
  /// ------------------------ state
  /// size
  const [baseSize, setBaseSize] = useState({ width: 0, height: 0, x: 0, y: 0 });
  /// 설정한 starId 를 저장할 곳
  const [starId, setStarId] = useState("");
  const starIdHandler = { starId, setStarId };

  /// ------------------------ mutation
  let goodsList = useQuery(SEE_GOOD_LIST, {
    variables: { starId },
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
              navigation.push("GoodsWriteNavigation", {
                fromScreen: navigation.state.routeName
              })
          }
        ]}
        centerItem={[
          {
            object: HeaderStyles.ARTIST,
            link: () =>
              navigation.push("GoodsSearchNavigation", {
                fromScreen: navigation.state.routeName,
                type: styles.SearchType_Artist_Main,
                handler: starIdHandler
              })
          }
        ]}
        rightItem={[
          {
            object: HeaderStyles.SEARCH,
            link: () =>
              navigation.push("GoodsSearchNavigation", {
                fromScreen: navigation.state.routeName,
                type: styles.SearchType_Goods,
                handler: starIdHandler
              })
          }
        ]}
      />
      {/* 본문 */}
      <ScrollView>
        {goodsList.loading ? (
          <Loader />
        ) : (
          goodsList.data.seeGoodsListFromStar.map(goods => (
            <GoodsItem
              navigation={navigation}
              key={goods.id}
              id={goods.id}
              cover={goods.files[0]}
              title={goods.title}
              body={goods.description}
              avatar={goods.user.avatar}
              username={goods.user.username}
              isBookmark={goods.isBookmarked}
              support={goods.support}
            />
          ))
        )}
        <ProbinetBottom />
      </ScrollView>
    </BaseContainer>
  );
};

export default Goods;
