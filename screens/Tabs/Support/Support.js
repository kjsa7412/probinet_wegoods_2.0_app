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

const Support = ({ navigation }) => {
  /// ------------------------ state
  /// size
  const [baseSize, setBaseSize] = useState({ width: 0, height: 0, x: 0, y: 0 });
  /// support status
  const [supportStatus, setSupportStatus] = useState([
    typeDef.SUPPORT_PROCEEDING

    //typeDef.SUPPORT_COMPLETE,
    //typeDef.SUPPORT_PREPARE,
    //typeDef.SUPPORT_FINAL_COMPLETE
  ]);

  /// ------------------------ mutation/useQuery
  let supportList = useQuery(SEE_SUPPORT_LIST, {
    variables: { supportStatus, loadNumber: 5 },
    fetchPolicy: "network-only"
  });

  /// ------------------------ func
  /// Headerbar support supportStatus handler
  const supportStatusOnPress = async () => {
    /// 현재는 진행중인 것과 진행중이 아닌것으로 나눈 두가지만 적용한다.(이대로 갈수도 있다)
    if (supportStatus.includes(typeDef.SUPPORT_PROCEEDING)) {
      setSupportStatus([
        typeDef.SUPPORT_COMPLETE,
        typeDef.SUPPORT_PREPARE,
        typeDef.SUPPORT_FINAL_COMPLETE
      ]);
    } else {
      setSupportStatus([typeDef.SUPPORT_PROCEEDING]);
    }
  };

  return (
    <BaseContainer
      onLayout={event => {
        setBaseSize(event.nativeEvent.layout);
      }}
    >
      <HeaderBase
        centerItem={[
          {
            object: supportStatus.includes(typeDef.SUPPORT_PROCEEDING)
              ? HeaderStyles.SUPPORT
              : HeaderStyles.SUPPORT_WEGOODS,
            link: supportStatusOnPress
          }
        ]}
        rightItem={[
          {
            object: HeaderStyles.SEARCH,
            link: () =>
              navigation.push("SupportSearchNavigation", {
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
              onPress={() => navigation.push("Support_Detail")}
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

export default Support;
