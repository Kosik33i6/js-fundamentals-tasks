import { v4 as uuidv4 } from 'uuid';
import validators from '../utlis';

class Product {
  constructor(name, categoryList = [], price, discount = 0) {
    validators.forArray.isArray(categoryList);
    validators.forArray.isListOfStrings(categoryList);
    validators.forString.isCorrectString(name);
    validators.forNumber.isPositive(price);
    validators.forNumber.isCorrectDiscount(discount);

    this.name = name;
    this.categoryList = categoryList;
    this.price = price.toFixed(2);
    this.discount = discount;
    this.uuid = uuidv4();
  }

  changeProductName(newName) {
    validators.forString.isCorrectString(newName);
    this.name = newName;
  }

  changeProductPrice(newPrice) {
    validators.forNumber.isPositive(newPrice);
    validators.forNumber.isFinite(newPrice);
    this.price = newPrice.toFixed(2);
  }

  changeProductDiscount(newDiscount) {
    validators.forNumber.isCorrectDiscount(newDiscount);
    this.discount = newDiscount;
  }

  getProductPriceAfterDiscount() {
    const percentage = 100;
    const priceAfterDiscount = (this.price - (this.discount / percentage * this.price));
    return priceAfterDiscount;
  }

  addProductToCategory(category) {
    validators.forString.isCorrectString(category);

    const isCategoryListInclude = this.categoryList.includes(category);
    if(!isCategoryListInclude) {
      this.categoryList.push(category);
    }
  }

  removeProductFromCategory(category) {
    validators.forString.isCorrectString(category);

    const index = this.categoryList.findIndex(categoryInList => categoryInList === category);
    if(index) {
      this.categoryList.splice(index, 1);
    }
  }
}

export default Product;
