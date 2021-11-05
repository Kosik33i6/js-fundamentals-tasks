// TODO Ma mieć: uuid, listę wybranych przedmiotów, rabat % na koszyk, kod rabatowy
// TODO Ma umożliwiać:
// TODO - dodawanie/usuwanie przedmiotów do/z koszyka
// TODO - zmianę ilości produktu w koszyku
// TODO - podliczać wartość koszyka uwzględniajac rabaty

import { v4 as uuidv4 } from 'uuid';
import CartItem from './CartItem';
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

  addProduct(name, category, price, discount, amount) {
    validators.forArray.isArray(category);
    validators.forArray.isListOfStrings(category);
    validators.forString.isCorrectString(name);
    validators.forNumber.isPositive(price);
    validators.forNumber.isCorrectDiscount(discount);
    validators.forNumber.isPositive(amount);
    validators.forNumber.isInteger(amount);

    const isCartContainProduct = this.productList.length > 0;
    const isCartContainSameProduct = this.productList.some(product => product.name === name);
    if(!isCartContainProduct || !isCartContainSameProduct) {
      const product = new CartItem(name, category, price, discount, amount);
      this.productList.push(product);
      return;
    }

    const productInCart = this.searchProduct(name);
    this.changeProductAmount(productInCart.name, amount);
  }

  removeProduct(index) {
    validators.forNumber.isCorrectIndex(index, this.productList);
    const deleteCount = 1;
    this.productList.splice(index, deleteCount);
  }

  changeProductAmount(productName, amount, action = actions.productAmount.default) {
    validators.forNumber.isInteger(amount);
    validators.forNumber.isPositive(amount);
    validators.forActions.isCorrectActionToChangeAmount(action);
    validators.forString.isCorrectString(productName);

    const product = this.searchProduct(productName);

    switch(action) {
      case actions.productAmount.increase:
        product.increaseAmount();
        break;
      case actions.productAmount.decrease:
        product.decreaseAmount();
        break;
      case actions.productAmount.change:
        product.updateAmount(amount);
        break;
      default:
        product.amount += amount;
        break;
    }
  }

  searchProduct(productName) {
    validators.forString.isCorrectString(productName);

    const [product] = this.productList.filter(productData => productData.name === productName);
    return product;
  }

  totalPrice() {
    let totalPrice = 0;
    const isCartContainProduct = this.productList.length > 0;
    if(!isCartContainProduct) return 0;

    for(let i = 0; i < this.productList.length; i += 1) {
      totalPrice += this.productList[i].getProductPriceAfterDiscount();
    }
    return totalPrice;
  }
}

export default Cart;
