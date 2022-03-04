import { v4 as uuidv4 } from 'uuid';
import validators from '../utlis';

class Product {
  constructor(categoryList = [], discount = 0, name, price) {
    validators.forArray.isArray(categoryList);
    validators.forArray.isListOfStrings(categoryList);
    validators.forNumber.isCorrectDiscount(discount);
    validators.forString.isCorrectString(name);
    validators.forNumber.isPositive(price);

    this.categoryList = categoryList;
    this.discount = discount;
    this.name = name;
    this.price = price.toFixed(2);
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
    const priceAfterDiscount =
      this.price - (this.discount / percentage) * this.price;
    return priceAfterDiscount;
  }

  addProductToCategory(category) {
    validators.forString.isCorrectString(category);

    const categoryRegExp = new RegExp(category.toLowerCase().trim(), 'g');
    const isCategoryAlreadyMatchedProduct = this.categoryList.some(
      (categoryInList) => categoryRegExp.test(categoryInList)
    );

    if (isCategoryAlreadyMatchedProduct)
      throw new Error('This category is already assigned to the product');

    this.categoryList.push(category);
  }

  removeProductFromCategory(category) {
    validators.forString.isCorrectString(category);

    const foundIndex = this.categoryList.findIndex(
      (categoryInList) => categoryInList === category
    );

    if (foundIndex === -1)
      throw new Error('This category is not assigned to the product');

    this.categoryList.splice(foundIndex, 1);
  }
}

export default Product;
