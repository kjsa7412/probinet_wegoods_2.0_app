import React, { useState } from "react";
import PropTypes from "prop-types";

// apollo
import { gql } from "apollo-boost";
import { useMutation } from "react-apollo-hooks";

/// import
import useFlag from "../../hooks/useFlag";
import styles from "../../styles";
import typeDef from "../../typeDef";

/// gql
const TOGGLE_LIKE_POST = gql`
  mutation toggleLikeOfPost($postId: String!) {
    toggleLikeOfPost(postId: $postId)
  }
`;
const TOGGLE_LIKE_SUPPORT = gql`
  mutation toggleLikeOfSupport($supportId: String!) {
    toggleLikeOfSupport(supportId: $supportId)
  }
`;

const paramCheck = value => {
  if (value === undefined) {
    throw Error("2th prameter of likeHandler have to filled");
  }
  if (value !== typeDef.POST && likeTarget !== typeDef.SUPPORT) {
    throw Error("2th prameter of likeHandler have to 'POST' or 'SUPPORT'");
  }
};

const likeHandler = (intialValue = false, likeTarget) => {
  paramCheck(likeTarget);
  /// ------------------------ state
  const like = useFlag(intialValue);
  // 버튼 눌렀을때의 불투명 정도를 나타냄
  const [activeOpacity, setActiveOpacity] = useState(styles.opacityDefault);

  /// ------------------------ mutation
  const [likeMutation] = useMutation(
    likeTarget === typeDef.POST ? TOGGLE_LIKE_POST : TOGGLE_LIKE_SUPPORT
  );

  /// ------------------------ func
  const toggle = async id => {
    if (activeOpacity === styles.opacityDisable) {
      return;
    }
    try {
      setActiveOpacity(styles.opacityDisable);

      await likeMutation({
        variables:
          likeTarget === typeDef.POST ? { postId: id } : { supportId: id }
      });
    } catch (e) {
      console.log(e);
    } finally {
      like.setValue(!like.value);
      setActiveOpacity(styles.opacityDefault);
    }
  };

  return { value: like.value, toggle, activeOpacity };
};

export default likeHandler;
