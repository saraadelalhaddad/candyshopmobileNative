import React from "react";
import { observer } from "mobx-react";
import { Content, Spinner, Text } from "native-base";

// store
import bakeryStore from "../stores/bakeryStore";
import candyStore from "../stores/candyStore";

// style
import {
  BakeryDetailTitle,
  BakeryDetailImage,
  BakeryDetailWrapper,
} from "../styles";

// component
import CandyList from "./CandyList";

const BakeryDetail = ({ navigation, route }) => {
  // console.log(route);
  if (bakeryStore.loading) return <Spinner />;
  const { bakery } = route.params;

  const candiesFromCandyStore = bakery.candies.map((candy) =>
    candyStore.getCandyById(candy.id)
  );
  // console.log(candiesFromCandyStore);
  return (
    <Content>
      <BakeryDetailWrapper>
        <BakeryDetailImage source={{ uri: bakery.image }} />
        <BakeryDetailTitle>{bakery.name}</BakeryDetailTitle>
      </BakeryDetailWrapper>
      <CandyList candies={candiesFromCandyStore} />
    </Content>
  );
};

export default observer(BakeryDetail);
