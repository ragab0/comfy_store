const products = require("./../data/products");


class Ps {
  static failed(msg) {
    return {
      success: false,
      data: {
        msg,
      }
    }
  }
  static successed(data) {
    return {
      success: true,
      data,
    }
  }
}


class Product extends Ts {
  static getProduct() {

  }
}


class Products extends Ts {
  static getProducts() {

  }
}


function getProducts(req, res) {
}


function getProduct(req, res) {
 }


module.exports = {
  getProducts,
  getProduct,
}