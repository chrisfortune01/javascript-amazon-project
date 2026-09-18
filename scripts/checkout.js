import { cart, removeFromCart } from "../data/cart.js ";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";

updateCheckoutQuantity()

let cartSumarrayHTML = '';

cart.forEach(cartItem => {
    const productId = cartItem.productId;

    let matchingProduct;
    products.forEach(product => {
        if (product.id === productId) {
            matchingProduct = product;
        }
    });
    cartSumarrayHTML += `
    <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
        <div class="delivery-date js-delivery-date"></div>

        <div class="cart-item-details-grid">
            <img class="product-image"
            src="${matchingProduct.image}">

            <div class="cart-item-details">
            <div class="product-name">
                ${matchingProduct.name}
            </div>
            <div class="product-price">
                ${formatCurrency(matchingProduct.priceCents)}
            </div>
            <div class="product-quantity">
                <span>
                Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                </span>
                <span class="update-quantity-link link-primary">
                Update
                </span>
                <span class="delete-quantity-link link-primary js-delete-item" data-product-id="${matchingProduct.id}">
                Delete
                </span>
            </div>
            </div>

            <div class="delivery-options">
            <div class="delivery-options-title">
                Choose a delivery option:
            </div>
            <div class="delivery-option">
                <input type="radio" checked
                class="delivery-option-input"
                name="delivery-option-${matchingProduct.id}">
                <div>
                <div class="delivery-option-date js-7-days">
                    Tuesday, June 21
                </div>
                <div class="delivery-option-price">
                    FREE Shipping
                </div>
                </div>
            </div>
            <div class="delivery-option">
                <input type="radio"
                class="delivery-option-input"
                name="delivery-option-${matchingProduct.id}">
                <div>
                <div class="delivery-option-date js-3-days">
                    Wednesday, June 15
                </div>
                <div class="delivery-option-price">
                    $4.99 - Shipping
                </div>
                </div>
            </div>
            <div class="delivery-option">
                <input type="radio"
                class="delivery-option-input"
                name="delivery-option-${matchingProduct.id}">
                <div>
                <div class="delivery-option-date js-1-day">
                    Monday, June 13
                </div>
                <div class="delivery-option-price">
                    $9.99 - Shipping
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    `;
    document.querySelector('.js-order-summary').innerHTML = cartSumarrayHTML;

    document.querySelectorAll('.js-delete-item').forEach(deleteButton => {
        deleteButton.addEventListener(
        'click', () => {
            const productId = deleteButton.dataset.productId
            removeFromCart(productId);
            document.querySelector(`.js-cart-item-container-${productId}`).remove()
            updateCheckoutQuantity()
        });
    });

    document.querySelectorAll('.js-delivery-date').forEach(date => {
        date.innerHTML = `Delivery date: ${dayjs().format('dddd, MMMM D')}`
    })
    document.querySelectorAll('.js-7-days').forEach(date => {
        deliveryDate(7, date)
    })
    document.querySelectorAll('.js-3-days').forEach(date => {
        deliveryDate(3, date)
    })
    document.querySelectorAll('.js-1-day').forEach(date => {
        deliveryDate(1, date)
    })
})

function deliveryDate(addedDays, date) {
    let shippingDate = dayjs().add(addedDays,'day')
        date.innerHTML = shippingDate.format('dddd, MMMM D')
}

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
}