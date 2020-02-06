///
import React from "react";
import styled from "styled-components";
import { ScrollView } from "react-native";
import PropTypes from "prop-types";

///
import styles from "../../styles";
import constants from "../../constants";
import typeDef from "../../typeDef";

/// Container
const Touchable = styled.TouchableOpacity``;

const BaseContainer = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const CoverContainer = styled.View`
  flex-direction: column;
  width: ${constants.width - constants.margin10};
  height: ${constants.width * 0.7};
  margin-top: ${constants.margin05};
`;

const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${constants.width - constants.margin10};
  height: ${constants.width * 0.2};
`;

const BodyContainer = styled.View`
  flex-direction: column;
  width: ${constants.width - constants.margin10};
  margin-bottom: ${constants.margin05};
  overflow: hidden;
`;

/// Item
const Cover = styled.Image`
  flex: 1;
  background-color: ${styles.greyColor};
`;

const Organization = styled.Text`
  font-size: 30;
  font-family: NanumBarunGothicBold;
  color: ${styles.darkGreyColor};
`;

const Percent = styled.Text`
  font-size: 50;
  font-family: NanumBarunGothicBold;
`;

const Complete = styled.Text`
  font-size: 30;
  font-family: NanumBarunGothicBold;
  color: ${styles.weGoodsColor};
`;

const Title = styled.Text`
  font-size: 30;
  font-family: NanumBarunGothicBold;
  margin-bottom: ${constants.margin01};
`;

const Contents = styled.Text`
  font-size: 15;
  font-family: NanumBarunGothicLight;
  margin-bottom: ${constants.margin01};
`;

const SupportItem = ({
  navigation,
  onPress = () => {},
  id,
  cover,
  organization,
  percent,
  title,
  contents,
  supportStatus
}) => {
  return (
    <Touchable onPress={onPress}>
      <BaseContainer>
        <CoverContainer>
          <Cover source={{ uri: cover }} />
        </CoverContainer>

        <HeaderContainer>
          <Organization>{organization}</Organization>
          {supportStatus === typeDef.SUPPORT_PROCEEDING ? (
            <Percent>{percent}</Percent>
          ) : supportStatus === typeDef.SUPPORT_COMPLETE ? (
            <Complete>모금완료</Complete>
          ) : supportStatus === typeDef.SUPPORT_PREPARE ? (
            <Complete>준비중</Complete>
          ) : supportStatus === typeDef.SUPPORT_FINAL_COMPLETE ? (
            <Complete>진행완료</Complete>
          ) : (
            <Complete>--</Complete>
          )}
        </HeaderContainer>
        <BodyContainer>
          <Title>{title}</Title>
          <Contents>{contents}</Contents>
        </BodyContainer>
      </BaseContainer>
    </Touchable>
  );
};

SupportItem.propTypes = {
  navigation: PropTypes.any,
  onPress: PropTypes.func,
  id: PropTypes.string,
  cover: PropTypes.string,
  organization: PropTypes.string,
  percent: PropTypes.string,
  title: PropTypes.string,
  contents: PropTypes.string,
  supportStatus: PropTypes.number
};

export default SupportItem;
