import { updateCartQuantity } from "../data/cart.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
// import '../data/cart-class.js';
import '../data/backend-practice.js';

updateCheckoutQuantity()
renderOrderSummary()
renderPaymentSummary()

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