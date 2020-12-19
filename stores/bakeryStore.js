import React from "react";
import { View, Text } from "react-native";
import { makeObservable, observable, action } from "mobx";
import instance from "./instance";
// style
import { BakeryItemStyled } from "../styles";

class BakeryStore {
  bakeries = [];
  loading = true;

  constructor() {
    makeObservable(this, {
      bakeries: observable,
      loading: observable,
      fetchBakeries: action,
    });
  }

  fetchBakeries = async () => {
    try {
      console.log("0");
      const response = await instance.get("/bakeries");
      console.log("1");
      this.bakeries = response.data;
      this.loading = false;
    } catch (error) {
      console.error("BakeryStore -> fetchBakeries -> error", error);
    }
  };
}

const bakeryStore = new BakeryStore();
bakeryStore.fetchBakeries();
export default bakeryStore;
