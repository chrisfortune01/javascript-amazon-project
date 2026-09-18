import { cart } from "../data/cart.js ";
import { renderOrderSummary } from "./checkout/orderSummary.js";
updateCheckoutQuantity()
renderOrderSummary()

function updateCheckoutQuantity() {
  let cartQuantity = 0;
    cart.forEach(cartItem => {
      cartQuantity += cartItem.quantity;
    })
    if (cartQuantity > 1) {
        document.querySelector('.js-return-to-home-link')
            .innerHTML = `${cartQuantity} Items`;
    } else {
        document.querySelector('.js-return-to-home-link')
            .innerHTML = `${cartQuantity} Item`;
    }
};