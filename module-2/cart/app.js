// import CartItem from './components/CartItem';
import Cart from './components/Cart';
import CartItem from './components/CartItem';
import Product from './components/Product';

const product = new Product('bike', ['category-1', 'category-2'], 100, 20);
const product2 = new Product('phone', ['category-1', 'category-4'], 200, 10);
const product3 = new Product('car', ['category-5', 'category-10'], 20000, 3);

// const cartItem = new CartItem(product, 2);
// const priceAfterDiscount = product.getProductPriceAfterDiscount();
// console.log(priceAfterDiscount);
// console.log(cartItem);


const cart = new Cart(5);

cart.addProduct(product, 1);
// cart.addProduct(product, 1);
// cart.addProduct(product, 5);
cart.addProduct(product2, 1);
// cart.addProduct(product3, 4);
// cart.addProduct(product3, 1);
// cart.addProduct(product2, 3);
// cart.removeProduct(0);
// cart.changeProductAmount(cart.productList[0], 2);
console.log(cart.totalPrice());

console.log(cart);

// cart.addProduct('bike', ['category-1', 'category-2'], 100, 20, 3);
// cart.addProduct('bike', ['category-1', 'category-2'], 100, 20, 6);
// cart.addProduct('phone', ['category-1', 'category-4'], 200, 10, 3);
// cart.addProduct('car', ['category-1', 'category-4'], 2000, 0, 1);
// cart.changeProductAmount('bike', 3);
// console.log(cart);
// cart.changeProductAmount('bike ', 7);
// console.log(cart);

// const totalProductsPrice = cart.totalPrice();
// console.log(totalProductsPrice);
