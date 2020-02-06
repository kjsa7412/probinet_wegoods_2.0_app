import React from "react";
import styled from "styled-components";

const View = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;
export default ({ navigation }) => {
  return (
    <View>
      <Text>TakePhoto!</Text>
    </View>
  );
};
