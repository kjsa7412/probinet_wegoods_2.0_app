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
  margin-top: ${constants.margin05};
  margin-bottom: ${constants.margin05};
`;

const StatusContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${props =>
    props.bgColor ? props.bgColor : styles.whiteColor};
`;

const ItemContainer = styled.TouchableOpacity`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${constants.width * 0.25};
  height: ${constants.width * 0.25};
`;

const BlankContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${constants.width * 0.25};
  height: ${constants.width * 0.25};
`;

/// Item
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

const MiddleProfile = ({
  navigation,
  isMe,
  isCreator,
  follower,
  following,
  support,
  auth,
  alarm,
  buy,
  order,
  after
}) => {
  let isAlarm = false;
  let isBuy = false;
  let isOrder = false;
  let isAfter = false;

  if (isMe && isCreator) {
    isAlarm = true;
    isBuy = true;
    isOrder = true;
    isAfter = true;
  }

  if (isMe && !isCreator) {
    isAlarm = true;
    isBuy = true;
    isOrder = false;
    isAfter = false;
  }

  if (!isMe && isCreator) {
    isAlarm = false;
    isBuy = false;
    isOrder = false;
    isAfter = true;
  }

  if (!isMe && !isCreator) {
    isAlarm = false;
    isBuy = false;
    isOrder = false;
    isAfter = false;
  }

  return (
    <BaseContainer>
      <StatusContainer bgColor={styles.weGoodsColor}>
        <ItemContainer
          onPress={() =>
            navigation.push("ProfileSearchNavigation", {
              fromScreen: navigation.state.routeName,
              type: styles.SearchType_User
            })
          }
        >
          <Number color={styles.whiteColor}>{follower}</Number>
          <Title color={styles.whiteColor}>팔로워</Title>
        </ItemContainer>
        <ItemContainer
          onPress={() =>
            navigation.push("ProfileSearchNavigation", {
              fromScreen: navigation.state.routeName,
              type: styles.SearchType_User
            })
          }
        >
          <Number color={styles.whiteColor}>{following}</Number>
          <Title color={styles.whiteColor}>팔로잉</Title>
        </ItemContainer>
        <ItemContainer
          onPress={() =>
            navigation.push("Support_User_Status_Date", {
              fromScreen: navigation.state.routeName
            })
          }
        >
          <Number color={styles.whiteColor}>{support}</Number>
          <Title color={styles.whiteColor}>서포트</Title>
        </ItemContainer>
        <ItemContainer
          onPress={() =>
            navigation.push("Profile_Auth", {
              fromScreen: navigation.state.routeName
            })
          }
        >
          <Number color={styles.whiteColor}>{auth}</Number>
          <Title color={styles.whiteColor}>인증</Title>
        </ItemContainer>
      </StatusContainer>
      <StatusContainer>
        {isAlarm ? (
          <ItemContainer
            onPress={() =>
              navigation.push("Profile_Alram", {
                fromScreen: navigation.state.routeName
              })
            }
          >
            <Number>{alarm}</Number>
            <Title>알람</Title>
          </ItemContainer>
        ) : (
          <BlankContainer></BlankContainer>
        )}
        {isBuy ? (
          <ItemContainer
            onPress={() =>
              navigation.push("Profile_Buy", {
                fromScreen: navigation.state.routeName
              })
            }
          >
            <Number>{buy}</Number>
            <Title>구매</Title>
          </ItemContainer>
        ) : (
          <BlankContainer></BlankContainer>
        )}
        {isOrder ? (
          <ItemContainer
            onPress={() =>
              navigation.push("Profile_Order_Date", {
                fromScreen: navigation.state.routeName
              })
            }
          >
            <Number>{order}</Number>
            <Title>받은주문</Title>
          </ItemContainer>
        ) : (
          <BlankContainer></BlankContainer>
        )}
        {isAfter ? (
          <ItemContainer
            onPress={() =>
              navigation.push("ProfileReviewNavigation", {
                fromScreen: navigation.state.routeName
              })
            }
          >
            <Number>{after}</Number>
            <Title>상품후기</Title>
          </ItemContainer>
        ) : (
          <BlankContainer></BlankContainer>
        )}
      </StatusContainer>
    </BaseContainer>
  );
};

MiddleProfile.propTypes = {
  navigation: PropTypes.any,
  isMe: PropTypes.bool,
  isCreator: PropTypes.bool,
  follower: PropTypes.string,
  following: PropTypes.string,
  support: PropTypes.string,
  auth: PropTypes.string,
  alarm: PropTypes.string,
  isAlarm: PropTypes.string,
  buy: PropTypes.string,
  order: PropTypes.string,
  after: PropTypes.string
};

export default MiddleProfile;
