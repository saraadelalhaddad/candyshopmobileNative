import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-community/async-storage";

class CartStore {
  items = [
    {
      candyId: 9,
      quantity: 5,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  fetchCart = async (newItem) => {
    const items = await AsyncStorage.getItem("myCart");
    this.items = items ? JSON.parse(items) : [];
  };

  addItemToCart = async (newItem) => {
    const foundItem = this.items.find(
      (item) => item.candyId === newItem.candyId
    );
    if (foundItem) foundItem.quantity += newItem.quantity;
    else this.items.push(newItem);
    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  };

  get totalQuantity() {
    let total = 0;
    this.items.forEach((item) => (total += item.quantity));
    return total;
  }

  removeItemFromCart = async (itemId) => {
    this.items = this.items.filter((item) => item.candyId !== itemId);
    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  };

  checkout = () => {
    this.items = [];
    alert("I'm a cute message");
  };
}

const cartStore = new CartStore();
cartStore.fetchCart();
export default cartStore;
