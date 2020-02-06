import React, { useState } from "react";

// apollo
import { gql } from "apollo-boost";
import { useMutation } from "react-apollo-hooks";

/// import
import useFlag from "../../hooks/useFlag";
import styles from "../../styles";

/// gql
const TOGGLE_BOOKMARK = gql`
  mutation toggleBookmark($goodsId: String!) {
    toggleBookmark(goodsId: $goodsId)
  }
`;

const bookmarkHandler = (intialValue = false) => {
  /// ------------------------ state
  const bookmark = useFlag(intialValue);
  ///  버튼 눌렀을때의 불투명 정도를 나타냄
  const [activeOpacity, setActiveOpacity] = useState(styles.opacityDefault);

  /// ------------------------ mutation
  const [bookmarkMutation] = useMutation(TOGGLE_BOOKMARK);

  /// ------------------------ func
  const toggle = async goodsId => {
    if (activeOpacity === styles.opacityDisable) {
      return;
    }
    try {
      setActiveOpacity(styles.opacityDisable);

      const {
        data: { toggleBookmark }
      } = await bookmarkMutation({
        variables: {
          goodsId
        }
      });
    } catch (e) {
      console.log(e);
    } finally {
      bookmark.setValue(!bookmark.value);
      setActiveOpacity(styles.opacityDefault);
    }
  };

  return { value: bookmark.value, toggle, activeOpacity };
};

export default bookmarkHandler;
