import CartItem from './components/CartItem';
import Cart from './components/Cart';


// const product = new CartItem('bike', ['category-1', 'category-2'], 100, 20, 1);
// const product2 = new CartItem('phone', ['category-1', 'category-4'], 200, 10, 3);
// const product3 = new CartItem('car', ['category-5', 'category-10'], 20000, 3, 2);
const cart = new Cart(20);
cart.addProduct('bike', ['category-1', 'category-2'], 100, 20, 3);
cart.addProduct('bike', ['category-1', 'category-2'], 100, 20, 6);
cart.addProduct('phone', ['category-1', 'category-4'], 200, 10, 3);
cart.addProduct('car', ['category-1', 'category-4'], 2000, 0, 1);
cart.changeProductAmount('bike', 3);
// console.log(cart);
// cart.changeProductAmount('bike ', 7);
// console.log(cart);

const totalProductsPrice = cart.totalPrice();
console.log(totalProductsPrice);
