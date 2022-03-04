// TODO Ma mieć: uuid, listę wybranych przedmiotów, rabat % na koszyk, kod rabatowy
// TODO Ma umożliwiać:
// TODO - dodawanie/usuwanie przedmiotów do/z koszyka
// TODO - zmianę ilości produktu w koszyku
// TODO - podliczać wartość koszyka uwzględniajac rabaty

import { v4 as uuidv4 } from 'uuid';
import CartItem from './CartItem';
import Product from './Product';
import validators from '../utlis';

const couponCode = require('coupon-code');

class Cart {
  constructor(discount) {
    validators.forNumber.isCorrectDiscount(discount);

    this.productList = [];
    this.discount = discount;
    this.uuid = uuidv4();
    this.discountCode = couponCode.generate({ parts: 4, partLen: 6 });
  }

  addProduct(product, amount) {
    validators.forClassInstance.isInstanceOfClass(product, Product);
    validators.forNumber.isPositive(amount);
    validators.forNumber.isInteger(amount);

    const isCartContainSameProduct = this.productList.some(
      (cartItem) => cartItem.product.uuid === product.uuid
    );
    if (!isCartContainSameProduct) {
      const cartItem = new CartItem(product, amount);
      this.productList.push(cartItem);
      return;
    }

    const productInCart = this.searchProduct(product);
    productInCart.increaseAmount(amount);
  }

  removeProduct(product, amount) {
    validators.forClassInstance.isInstanceOfClass(product, Product);
    validators.forNumber.isPositive(amount);
    validators.forNumber.isInteger(amount);

    const isCartContainProduct = this.productList.some(
      (cartItem) => cartItem.product.uuid === product.uuid
    );
    if (!isCartContainProduct)
      throw new Error('The cart does not contain the product');

    const removedProduct = this.searchProduct(product);

    if (removedProduct.amount > amount) {
      removedProduct.decreaseAmount(amount);
    } else {
      const index = this.getProductIndex(product);
      const deleteCount = 1;
      this.productList.splice(index, deleteCount);
    }
  }

  searchProduct(product) {
    validators.forClassInstance.isInstanceOfClass(product, Product);
    const index = this.getProductIndex(product);
    return this.productList[index];
  }

  getProductIndex(product) {
    validators.forClassInstance.isInstanceOfClass(product, Product);
    const index = this.productList.findIndex(
      (productInList) => productInList.product.uuid === product.uuid
    );
    return index;
  }

  totalPrice() {
    let totalPrice = 0;
    const isCartContainProduct = this.productList.length > 0;
    if (!isCartContainProduct) return 0;

    // TODO Use reduce
    for (let i = 0; i < this.productList.length; i += 1) {
      // TODO single product
      totalPrice +=
        this.productList[i].amount *
        this.productList[i].product.getProductPriceAfterDiscount();
    }

    const percentage = 100;
    // TODO add cupon logic this.discountCode === arg totalPrice * (this.discount / percentage) --- totalPrice

    return totalPrice - totalPrice * (this.discount / percentage);
  }
}

export default Cart;
