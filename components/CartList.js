import React from "react";
import { List, Spinner, Text } from "native-base";
import { observer } from "mobx-react";

// Stores
import cartStore from "../stores/cartStore";
import candyStore from "../stores/candyStore";

// Components
import CartItem from "./CartItem";
import { CheckoutButton, CheckoutButtonText } from "../styles";

const CartList = () => {
  if (candyStore.loading) return <Spinner />;
  const cartList = cartStore.items
    .map((item) => ({
      ...candyStore.getCandyById(item.candyId),
      quantity: item.quantity,
    }))
    .map((item) => <CartItem item={item} key={item.name} />);
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
