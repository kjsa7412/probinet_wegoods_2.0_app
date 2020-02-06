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
import CoverParts from "../../../components/Parts/CoverParts";
import UserName from "../../../components/Name/UserName";
import PostName from "../../../components/Name/PostName";
import PhotoItem from "../../../components/Item/PhotoItem";

/// Container
const BaseContainer = styled.View`
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const TopContainer = styled.View`
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const AbsoluteContainer = styled.View`
  flex-direction: column;
  position: absolute;
`;

const ProfileContainer = styled.View`
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
`;

const BlankContainer = styled.View`
  flex-direction: column;
  width: 100%;
  height: ${constants.width * 0.83};
`;

/// Item
const StatusContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${props =>
    props.bgColor ? props.bgColor : styles.whiteColor};
  width: ${constants.width * 0.9};
  margin-top: ${constants.margin05};
  margin-bottom: ${constants.margin05};
`;

const ItemContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${constants.width * 0.25};
  height: ${constants.width * 0.25};
`;

const ItemContainer_Touchable = styled.TouchableOpacity`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${constants.width * 0.25};
  height: ${constants.width * 0.25};
`;

const Number = styled.Text`
  font-size: 30;
  text-align: center;
  font-family: NanumBarunGothicBold;
  color: ${props => (props.color ? props.color : styles.blackColor)};
`;

const Title = styled.Text`
  font-size: 15;
  text-align: center;
  font-family: NanumBarunGothicLight;
  color: ${props => (props.color ? props.color : styles.blackColor)};
`;

/// Bio
const BioContainer = styled.View`
  flex-direction: column;
  width: 90%;
`;

const Bio = styled.Text`
font-size: 15;
font-family: NanumBarunGothicLight;
margin-top: ${constants.margin05}
margin-bottom: ${constants.margin05}
`;

const Post_Detail = ({ navigation }) => {
  const id = navigation.getParam("id", "");
  const fromScreen = navigation.getParam("fromScreen", "");
  const [baseSize, setBaseSize] = useState({ width: 0, height: 0, x: 0, y: 0 });

  return (
    <BaseContainer
      onLayout={event => {
        setBaseSize(event.nativeEvent.layout);
      }}
    >
      {/************* 헤더 *************/}
      <HeaderBase
        leftItem={[
          {
            object: HeaderStyles.BACK,
            link: () => navigation.goBack()
          }
        ]}
      />
      <ScrollView
        style={{ width: "100%" }}
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <TopContainer>
          <AbsoluteContainer>
            <CoverParts cover={styles.TempImage1} />
          </AbsoluteContainer>
          <ProfileContainer>
            <BlankContainer />
            <UserName
              onPress={() => {}}
              margin={constants.margin01}
              avatar={styles.TempImage1}
              username={"DAVID SA"}
            />
            <PostName postname={"COMPANY PROJECT"} />
          </ProfileContainer>
        </TopContainer>

        <StatusContainer>
          <ItemContainer_Touchable
            onPress={() =>
              navigation.push("PostSearchNavigation", {
                fromScreen: navigation.state.routeName,
                type: styles.SearchType_User
              })
            }
          >
            <Number color={styles.blackColor}>1K</Number>
            <Title color={styles.blackColor}>좋아요</Title>
          </ItemContainer_Touchable>
          <ItemContainer>
            <Number color={styles.blackColor}>11</Number>
            <Title color={styles.blackColor}>열람</Title>
          </ItemContainer>
          <ItemContainer_Touchable
            onPress={() =>
              navigation.push("PostCommentNavigation", {
                fromScreen: navigation.state.routeName
              })
            }
          >
            <Number color={styles.blackColor}>22</Number>
            <Title color={styles.blackColor}>댓글</Title>
          </ItemContainer_Touchable>
        </StatusContainer>

        <BioContainer>
          <Bio>{styles.TempText1}</Bio>
        </BioContainer>

        <PhotoItem
          src={[styles.TempImage1, styles.TempImage1]}
          title={"SEVENTEEN"}
          desc={styles.TempText1}
          by={"DAVID SA"}
        />
        <PhotoItem
          src={[styles.TempImage1, styles.TempImage1]}
          title={"SEVENTEEN"}
          desc={styles.TempText1}
          by={"DAVID SA"}
        />
      </ScrollView>
    </BaseContainer>
  );
};

export default Post_Detail;
