/**
 * TODO Ma miec: Nazwę, Kategorię, Cenę, Rabat % na przedmiot, uuid
 * TODO Ma umożliwiać: - modyfikować cenę przedmiotu | określać jego rabat procentowy | dodawać produkt do kategorii | zmianę nazwy, ceny lub rabatu
 */

import validators from '../utlis';
import Product from './Product';


// brak funkcjonalnośc związanej z wiedzą odnośnie wartości pozycji
class CartItem {
  constructor(product, amount) {
    validators.forClassInstance.isInstanceOfClass(product, Product);
    validators.forNumber.isPositive(amount);
    validators.forNumber.isInteger(amount);

    this.product = product;
    this.amount = amount;
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

  getTotalValue(){
    // product.price * amount
  }
}

export default CartItem;
