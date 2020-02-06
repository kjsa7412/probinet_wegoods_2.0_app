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

/// Product
const ProductContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${constants.width * 0.9};
  margin-top: ${constants.margin05};
  margin-bottom: ${constants.margin05};
`;

const ProductCoverContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${constants.width * 0.9};
  height: ${constants.width * 0.9};
`;

const ProductContentsContainer = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;

const ProductCover = styled.Image`
  width: 100%;
  height: 100%;
`;

const ProductTitle = styled.Text`
font-size: 20;
font-family: NanumBarunGothicBold;
margin-top: ${constants.margin01}
margin-bottom: ${constants.margin01}
`;

const ProductDesc = styled.Text`
font-size: 15;
font-family: NanumBarunGothicLight;
margin-top: ${constants.margin01}
margin-bottom: ${constants.margin01}
`;

const ProductPrice = styled.Text`
font-size: 15;
font-family: NanumBarunGothicBold;
margin-top: ${constants.margin01}
margin-bottom: ${constants.margin01}
`;

const ProductItem = ({
  src,
  title,
  desc,
  price,
  isCancel,
  cancelWidth,
  cancelPress
}) => {
  return (
    <ProductContainer>
      <ProductCoverContainer>
        <Swiper activeDotColor={"#FFFFFF"}>
          {src.map((value, index) => (
            <ProductCover key={index} source={{ uri: value }} />
          ))}
        </Swiper>
        {isCancel ? (
          <CancelButton_Absolute onPress={cancelPress} width={cancelWidth} />
        ) : null}
      </ProductCoverContainer>
      <ProductContentsContainer>
        <ProductTitle>{title}</ProductTitle>
        <ProductDesc>{desc} </ProductDesc>
        <ProductPrice>₩ {price}</ProductPrice>
      </ProductContentsContainer>
    </ProductContainer>
  );
};

ProductItem.propTypes = {
  src: PropTypes.array,
  title: PropTypes.string,
  desc: PropTypes.string,
  price: PropTypes.string,
  isCancel: PropTypes.bool,
  cancelWidth: PropTypes.any,
  cancelPress: PropTypes.func
};

export default ProductItem;
