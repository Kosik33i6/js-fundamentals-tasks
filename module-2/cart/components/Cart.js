// TODO Ma mieć: uuid, listę wybranych przedmiotów, rabat % na koszyk, kod rabatowy
// TODO Ma umożliwiać:
// TODO - dodawanie/usuwanie przedmiotów do/z koszyka
// TODO - zmianę ilości produktu w koszyku
// TODO - podliczać wartość koszyka uwzględniajac rabaty

import { v4 as uuidv4 } from 'uuid';
import CartItem from './CartItem';
import Product from './Product';
import validators from '../utlis';
import actions from '../settigs';

const couponCode = require('coupon-code');

class Cart {
  constructor(discount) {
    validators.forNumber.isCorrectDiscount(discount);

    this.productList = [];
    this.discount = discount;
    this.uuid = uuidv4();
    this.discountCode = couponCode.generate({ parts: 4, partLen: 6});
  }

  addProduct(product, amount) {
    validators.forClassInstance.isInstanceOfClass(product, Product);
    validators.forNumber.isPositive(amount);
    validators.forNumber.isInteger(amount);

    const isCartContainProduct = this.productList.length > 0;
    const isCartContainSameProduct = this.productList.some(cartItem => cartItem.product === product);
    if(!isCartContainProduct || !isCartContainSameProduct) {
      const cartItem = new CartItem(product, amount);
      this.productList.push(cartItem);
      return;
    }

    const productInCart = this.searchProduct(product);
    this.changeProductAmount(productInCart, amount);
  }

  removeProduct(index) {
    validators.forNumber.isCorrectIndex(index, this.productList);
    const deleteCount = 1;
    this.productList.splice(index, deleteCount);
  }

  changeProductAmount(cartItem, amount, action = actions.productAmount.default) {
    validators.forNumber.isInteger(amount);
    validators.forNumber.isPositive(amount);
    validators.forActions.isCorrectActionToChangeAmount(action);
    validators.forClassInstance.isInstanceOfClass(cartItem, CartItem);

    switch(action) {
      case actions.productAmount.increase:
        cartItem.increaseAmount();
        break;
      case actions.productAmount.decrease:
        cartItem.decreaseAmount();
        break;
      case actions.productAmount.change:
        cartItem.updateAmount(amount);
        break;
      default:
        cartItem.amount += amount;
        break;
    }
  }

  searchProduct(product) {
    validators.forClassInstance.isInstanceOfClass(product, Product);

    const [productInCart] = this.productList.filter(cartItem => cartItem.product === product);
    return productInCart;
  }

  totalPrice() {
    let totalPrice = 0;
    const isCartContainProduct = this.productList.length > 0;
    if(!isCartContainProduct) return totalPrice;

    for(let i = 0; i < this.productList.length; i += 1) {
      console.log(this.productList[i]);
      totalPrice += this.productList[i].product.getProductPriceAfterDiscount();
    }

    const percentage = 100;
    return totalPrice - (totalPrice * (this.discount / percentage));
  }
}

export default Cart;
