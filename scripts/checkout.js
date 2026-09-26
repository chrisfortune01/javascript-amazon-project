import { updateCartQuantity } from "../data/cart.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import '../data/cart-class.js';
// import '../data/backend-practice.js';

Promise.all([
  loadProductsFetch(),
  new Promise(resolve => {
    loadCart(() => {
      resolve();
    })
  })

]).then(value => {
  updateCheckoutQuantity();
  renderOrderSummary();
  renderPaymentSummary();
  console.log(value)
});

/*
new Promise(resolve => {
  loadProducts(() => {
    resolve('value 1');
  });

}).then((value) =>{
  return new Promise(resolve => {
    loadCart(() => {
      resolve();
    })
    // console.log(value)
  })

}).then(() => {
  updateCheckoutQuantity();
  renderOrderSummary();
  renderPaymentSummary();
  console.log('finished')
})
*/

/*
loadProducts(() => {
  loadCart(() => {
    updateCheckoutQuantity();
    renderOrderSummary();
    renderPaymentSummary();
  });
})
*/

export function updateCheckoutQuantity() {
  let cartQuantity = updateCartQuantity();
  if (cartQuantity > 1) {
    document.querySelector('.js-return-to-home-link')
      .innerHTML = `${cartQuantity} Items`;
  } else {
    document.querySelector('.js-return-to-home-link')
      .innerHTML = `${cartQuantity} Item`;
  }
};