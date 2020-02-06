///
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

///
import styles from "../../styles";
import constants from "../../constants";

///
const GoodsnameContainer = styled.View`
  flex-direction: column;
`;

const Goodsname = styled.Text`
  font-size: 50;
  font-family: NanumBarunGothicBold;
  color: ${styles.blackColor};
`;

///
const DateContainer = styled.View`
  flex-direction: row;
`;

const Date = styled.Text`
  font-size: 25;
  font-family: NanumBarunGothicBold;
  color: ${styles.darkGreyColor};
`;

const GoodsName = ({ goodsname, date }) => {
  return (
    <GoodsnameContainer>
      <Goodsname> {goodsname} </Goodsname>
      {date === undefined || date === "" ? null : (
        <DateContainer>
          <Date>~</Date>
          <Date>{date}</Date>
          <Date> (주문마감)</Date>
        </DateContainer>
      )}
    </GoodsnameContainer>
  );
};

GoodsName.propTypes = {
  goodsname: PropTypes.string,
  date: PropTypes.string
};

export default GoodsName;
