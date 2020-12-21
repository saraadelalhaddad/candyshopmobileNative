import { CheckoutButton, CheckoutButtonText } from "../styles";
import { List, Spinner, Text } from "native-base";

import CartItem from "./CartItem";
import React from "react";
import candyStore from "../stores/candyStore";
import cartStore from "../stores/cartStore";
import { observer } from "mobx-react";

// Stores



// Components



const CartList = () => {
  if (candyStore.loading) return <Spinner />;
  const cartList = cartStore.items
    .map((item) => ({
      ...candyStore.getCandyById(item.candyId),
      quantity: item.quantity,
    }))
    .map((item) => <CartItem item={item} key={item.id} />);
  return (
    <>
      <List>{cartList}</List>
      <CheckoutButton onPress={cartStore.checkout}>
        <CheckoutButtonText>Checkout</CheckoutButtonText>
      </CheckoutButton>
    </>
  );
};

export default observer(CartList);
