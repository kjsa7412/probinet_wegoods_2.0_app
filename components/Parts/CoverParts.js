///
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

///
import styles from "../../styles";
import constants from "../../constants";
import { ScrollView } from "react-native-gesture-handler";

/// CoverContainer
const CoverContainer = styled.View`
  flex-direction: column;
  width: ${constants.width};
  height: ${constants.width};
`;

///
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

const Cover = styled.Image`
  flex: 1;
  background-color: ${styles.greyColor};
`;

const Icon = styled.Image`
  width: 50%;
  height: 50%;
`;

///
const SupportPercentContainer = styled.View`
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  width: 100%;
`;

const SupportPercentContainer_Inner = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${constants.width * 0.25};
  height: ${constants.width * 0.2};
`;

const SupportPercent = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80%;
  border-radius: 10px;
  background-color: ${styles.weGoodsColor};
`;

const PercentContainer = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

const DescContainer = styled.View`
  flex-direction: column;
`;

const Number = styled.Text`
  font-size: ${constants.width * 0.08};
  font-family: NanumBarunGothicBold;
  color: ${styles.whiteColor};
`;

const Percent = styled.Text`
  font-size: ${constants.width * 0.05};
  font-family: NanumBarunGothicBold;
  color: ${styles.whiteColor};
`;

const Desc = styled.Text`
  font-size: ${constants.width * 0.03};
  font-family: NanumBarunGothicLight;
  color: ${styles.whiteColor};
`;

const CoverParts = ({
  cover,
  supportPercent,
  isBookmark = false,
  bookmarkOnPress = () => {}
}) => {
  return (
    <CoverContainer>
      <Cover source={{ uri: cover }} />
      <IconContainer>
        <IconContainer_Touchable onPress={bookmarkOnPress}>
          <Icon
            source={
              isBookmark
                ? require("../../assets/iconmonstr-star-wegoods.png")
                : require("../../assets/iconmonstr-star-white.png")
            }
          />
        </IconContainer_Touchable>
        <IconContainer_Normal>
          <Icon
            source={
              supportPercent === undefined || supportPercent === ""
                ? null
                : require("../../assets/iconmonstr-tree-wegoods.png")
            }
          />
        </IconContainer_Normal>
      </IconContainer>

      {supportPercent === undefined || supportPercent === "" ? null : (
        <SupportPercentContainer>
          <SupportPercentContainer_Inner>
            <SupportPercent>
              <PercentContainer>
                <Number>10</Number>
                <Percent>%</Percent>
              </PercentContainer>
              <DescContainer>
                <Desc>서포트 지원</Desc>
              </DescContainer>
            </SupportPercent>
          </SupportPercentContainer_Inner>
        </SupportPercentContainer>
      )}
    </CoverContainer>
  );
};

CoverParts.propTypes = {
  cover: PropTypes.string,
  supportPercent: PropTypes.string,
  isBookmark: PropTypes.bool,
  bookmarkOnPress: PropTypes.func
};

export default CoverParts;
