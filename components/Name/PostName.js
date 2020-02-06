///
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

///
import styles from "../../styles";
import constants from "../../constants";

///
const PostnameContainer = styled.View`
  flex-direction: column;
`;

const Postname = styled.Text`
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

const PostName = ({ postname, date }) => {
  return (
    <PostnameContainer>
      <Postname> {postname} </Postname>
      {date === undefined || date === "" ? null : (
        <DateContainer>
          <Date>~</Date>
          <Date>{date}</Date>
          <Date> (주문마감)</Date>
        </DateContainer>
      )}
    </PostnameContainer>
  );
};

PostName.propTypes = {
  postname: PropTypes.string,
  date: PropTypes.string
};

export default PostName;
