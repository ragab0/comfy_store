// This file is processed only one time even if you hitted the server with many requests;
// SO saving some process and spped-up our app with choosing the right structure for each problem;

import products from "@/api/data/products";



class StaticData {
  constructor() {
    this.products = products;
    this.finedByIdStructure = new Map();
    this.getCategoriesAvailable = new Set();
    this.getCamponiesAvailable = new Set();
    this.getColorsAvailable = new Set();
    this.maxPriceAvailable = 0;
  }

  setBasicStaticData() {
    // Map for one only time and extracting the static data;
    products.forEach((product, i) => {
      this.finedByIdStructure.set([product.id, product]);
      this.getCategoriesAvailable.add(product.category);
      this.getCamponiesAvailable.add(product.company);
      this.getColorsAvailable.add(product.colors);
      this.maxPriceAvailable = product.price > maxPriceAvailable ? product.price : maxPriceAvailable;
    });
  }

  getBasicStaticData() {
    this.setBasicStaticData();
    return {
      products: this.products,
      getCategoriesAvailable: [...this.getCategoriesAvailable],
      getCamponiesAvailable: [...this.getCamponiesAvailable],
      getColorsAvailable: [...this.getColorsAvailable],
      maxPriceAvailable: this.maxPriceAvailable,
    }
  }

  getFinedByIdStaticDataStructure() {
    return this.finedByIdStructure;
  }
}



const staticData = new StaticData();
export const findByIdStructure = staticData.getFinedByIdStaticDataStructure();
export const initialData = staticData.getBasicStaticData();