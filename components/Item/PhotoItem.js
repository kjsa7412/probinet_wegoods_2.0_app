///
import React from "react";
import styled from "styled-components";
import { ScrollView } from "react-native";
import PropTypes from "prop-types";
import Swiper from "react-native-swiper";

///
import styles from "../../styles";
import constants from "../../constants";
import CancelButton_Absolute from "../Button/CancelButton_Absolute";

/// Container
const Touchable = styled.TouchableOpacity``;

/// Photo
const PhotoContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${constants.width * 0.9};
  margin-top: ${constants.margin05};
  margin-bottom: ${constants.margin05};
`;

const PhotoCoverContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${constants.width * 0.9};
  height: ${constants.width * 0.9};
`;

const PhotoContentsContainer = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;

const PhotoCover = styled.Image`
  width: 100%;
  height: 100%;
`;

const PhotoTitle = styled.Text`
font-size: 20;
font-family: NanumBarunGothicBold;
margin-top: ${constants.margin01}
margin-bottom: ${constants.margin01}
`;

const PhotoDesc = styled.Text`
font-size: 15;
font-family: NanumBarunGothicLight;
margin-top: ${constants.margin01}
margin-bottom: ${constants.margin01}
`;

const By = styled.Text`
font-size: 15;
font-family: NanumBarunGothicBold;
margin-top: ${constants.margin01}
margin-bottom: ${constants.margin01}
`;

const PhotoItem = ({ src, title, desc, by }) => {
  return (
    <PhotoContainer>
      <PhotoCoverContainer>
        <Swiper activeDotColor={"#FFFFFF"}>
          {src.map((value, index) => (
            <PhotoCover key={index} source={{ uri: value }} />
          ))}
        </Swiper>
      </PhotoCoverContainer>
      <PhotoContentsContainer>
        <PhotoTitle>{title}</PhotoTitle>
        <PhotoDesc>{desc}</PhotoDesc>
        {by === undefined || by === "" ? null : <By>photography by {by}</By>}
      </PhotoContentsContainer>
    </PhotoContainer>
  );
};

PhotoItem.propTypes = {
  src: PropTypes.array,
  title: PropTypes.string,
  desc: PropTypes.string,
  by: PropTypes.string
};

export default PhotoItem;
