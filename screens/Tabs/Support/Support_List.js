/// Import
import React, { useState, useEffect } from "react";
import { Text, ScrollView, Image } from "react-native";
import styles from "../../../styles";
import constants from "../../../constants";
import styled from "styled-components";
import typeDef from "../../../typeDef";
import { calcPercentToStr } from "../../../func/calc/numberCalc";

// Query
import { useQuery } from "react-apollo-hooks";
import { SEE_SUPPORT_LIST } from "./Support_Queries";

/// Components
import HeaderBase from "../../../components/Header/HeaderBase";
import HeaderStyles from "../../../components/Header/HeaderStyles";
import SupportItem from "../../../components/Item/SupportItem";
import ProbinetBottom from "../../../components/Bottom/ProbinetBottom";
import Loader from "../../../components/Loader";

/// Styled Components
const BaseContainer = styled.View`
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const Support_List = ({ navigation }) => {
  /// ------------------------ navigation parmeter
  const handler = navigation.getParam("handler", {});

  /// ------------------------ state
  /// size
  const [baseSize, setBaseSize] = useState({ width: 0, height: 0, x: 0, y: 0 });

  /// ------------------------ mutation/useQuery
  let supportList = useQuery(SEE_SUPPORT_LIST, {
    variables: { supportStatus: [typeDef.SUPPORT_PROCEEDING], loadNumber: 5 },
    fetchPolicy: "network-only"
  });

  return (
    <BaseContainer
      onLayout={event => {
        setBaseSize(event.nativeEvent.layout);
      }}
    >
      <HeaderBase
        leftItem={[
          {
            object: HeaderStyles.BACK,
            link: () => navigation.goBack()
          }
        ]}
        rightItem={[
          {
            object: HeaderStyles.SEARCH,
            link: () =>
              navigation.push("GoodsSearchNavigation", {
                fromScreen: navigation.state.routeName,
                type: styles.SearchType_Support
              })
          }
        ]}
      />
      <ScrollView>
        {supportList.loading ? (
          <Loader />
        ) : (
          supportList.data.seeRandomSupport.map(support => (
            <SupportItem
              navigation={navigation}
              key={support.id}
              id={support.id}
              cover={support.files[0]}
              organization={support.organization}
              percent={calcPercentToStr(support.collection, support.target)}
              title={support.title}
              contents={support.description}
              supportStatus={support.status}
            />
          ))
        )}

        <ProbinetBottom />
      </ScrollView>
    </BaseContainer>
  );
};

export default Support_List;
