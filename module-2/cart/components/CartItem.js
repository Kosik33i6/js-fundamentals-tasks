/**
 * TODO Ma miec: Nazwę, Kategorię, Cenę, Rabat % na przedmiot, uuid
 * TODO Ma umożliwiać: - modyfikować cenę przedmiotu | określać jego rabat procentowy | dodawać produkt do kategorii | zmianę nazwy, ceny lub rabatu
 */
import { v4 as uuidv4 } from 'uuid';
import validators from '../utlis';


class CartItem {
  constructor(name, categoryList = [], price, discount = 0, amount) {
    // ?  Czy category to array?
    validators.forArray.isArray(categoryList);
    validators.forArray.isListOfStrings(categoryList);
    validators.forString.isCorrectString(name);
    validators.forNumber.isPositive(price);
    validators.forNumber.isCorrectDiscount(discount);
    validators.forNumber.isPositive(amount);
    validators.forNumber.isInteger(amount);

    this.name = name;
    this.categoryList = categoryList;
    this.price = price;
    this.discount = discount;
    this.uuid = uuidv4();
    this.amount = amount;
  }

  changeProductPrice(newPrice) {
    validators.forNumber.isPositive(newPrice);
    validators.forNumber.isFinite(newPrice);
    this.price = newPrice.toFixed(2);
  }

  changeProductName(newName) {
    validators.forString.isCorrectString(newName);
    this.name = newName;
  }

  changeProductDiscount(newDiscount) {
    validators.forNumber.isCorrectDiscount(newDiscount);
    this.discount = newDiscount;
  }

  addProductToCategory(category) {
    validators.forString.isCorrectString(category);
    const isCategoryListInclude = this.categoryList.includes(category);
    if(!isCategoryListInclude) {
      this.categoryList.push(category);
    }
  }

  getProductPriceAfterDiscount() {
    const productPricePercentage = 100;
    const priceAfterDiscount = (this.price - (this.discount / productPricePercentage * this.price)) * this.amount;
    return priceAfterDiscount;
  }

  updateAmount(newAmount) {
    validators.forNumber.isPositive(newAmount);
    validators.forNumber.isInteger(newAmount);
    this.amount = newAmount;
  }

  increaseAmount() {
    this.amount += 1;
  }

  decreaseAmount() {
    this.amount -= 1;
  }
}

export default CartItem;
