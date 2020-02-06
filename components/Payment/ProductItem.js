///
import React from "react";
import styled from "styled-components";
import { ScrollView } from "react-native";
import PropTypes from "prop-types";

///
import styles from "../../styles";
import constants from "../../constants";
import WordButton from "../Button/WordButton";

/// Container
const Touchable = styled.TouchableOpacity``;

const ProductContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: ${props => props.height};
  margin-top: ${constants.margin05};
`;

const ProductImageContainer = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: ${props => props.width};
  height: ${props => props.height};
`;

const ProductContentsContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%
  margin-left:${constants.margin01};
`;

const Product = styled.Image`
  width: 100%;
  height: 100%;
`;

const ProductName = styled.Text`
  font-size: 20;
  font-family: NanumBarunGothicBold;
`;

const ProductPrice = styled.Text`
  font-size: 15;
  font-family: NanumBarunGothicBold;
`;

const ProductCountContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ProductCount = styled.Text`
  font-size: 35;
  font-family: NanumBarunGothicBold;
  margin-left: ${constants.margin02};
  margin-right: ${constants.margin02};
`;

const ProductItem = ({
  height,
  product,
  productName,
  productPrice,
  productCount,
  minusOnPress = () => {},
  plusOnPress = () => {}
}) => {
  return (
    <ProductContainer height={height}>
      <ProductImageContainer width={height} height={height}>
        <Product source={{ uri: product }} />
      </ProductImageContainer>
      <ProductContentsContainer>
        <ProductName>{productName}</ProductName>
        <ProductPrice>{productPrice}</ProductPrice>
        <ProductCountContainer>
          <WordButton
            onPress={minusOnPress}
            text={"-"}
            size={35}
            margin={"0"}
          />
          <ProductCount>{productCount}</ProductCount>
          <WordButton onPress={plusOnPress} text={"+"} size={35} margin={"0"} />
        </ProductCountContainer>
      </ProductContentsContainer>
    </ProductContainer>
  );
};

ProductItem.propTypes = {
  height: PropTypes.any,
  product: PropTypes.any,
  productName: PropTypes.any,
  productPrice: PropTypes.any,
  productCount: PropTypes.any,
  minusOnPress: PropTypes.any,
  plusOnPress: PropTypes.any
};

export default ProductItem;
