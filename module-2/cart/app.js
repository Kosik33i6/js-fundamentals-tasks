// import CartItem from './components/CartItem';
import Cart from './components/Cart';
import CartItem from './components/CartItem';
import Product from './components/Product';

const product = new Product(['category-1', 'category-2'], 20, 'bike', 100);
const product2 = new Product(['category-1', 'category-4'], 10, 'phone', 200);
const product3 = new Product(['category-5', 'category-10'], 3, 'car', 20000);

product.addProductToCategory('category-3');

const cart = new Cart(5);

cart.addProduct(product, 1);
cart.addProduct(product, 3);
cart.removeProduct(product, 2);
// cart.addProduct(product, 5);
// cart.addProduct(product2, 2);
// cart.addProduct(product3, 1);
cart.addProduct(product3, 2);
// cart.addProduct(product2, 3);
// cart.removeProduct(0);
// cart.changeProductAmount(cart.productList[0], 2);
// console.log(cart.totalPrice());

const totalProductsPrice = cart.totalPrice();
