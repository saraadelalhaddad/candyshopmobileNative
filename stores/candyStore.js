import { makeObservable, observable, action } from "mobx";
import instance from "./instance";

class CandyStore {
  candies = [];
  loading = true;
  constructor() {
    makeObservable(this, {
      candies: observable,
      loading: observable,
      fetchCandies: action,
    });
  }
  fetchCandies = async () => {
    try {
      const response = await instance.get("/candies");
      this.candies = response.data;
      this.loading = false;
    } catch (error) {
      console.error("CandyStore -> fetchCandies -> error", error);
    }
  };

  getCandyById = (candyId) =>
    this.candies.find((candy) => candy.id === candyId);
}

const candyStore = new CandyStore();
candyStore.fetchCandies();
export default candyStore;
