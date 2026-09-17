export const cart = [
    
];

 export function addToCart(productId) {
  let matchingItem;
    /*
    const quantity = parseInt(button.parentElement.querySelector('select').value);
    const cartItem = cart.find(carIitem => item.productName === productName);
    if (cartItem) {
      cartItem.quantity += quantity;
    } else {
      cart.push({
        productName: productName,
        quantity: quantity
      });
    }
    */
    cart.forEach(cartItem => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem
      }
    });
    if (matchingItem) {
      matchingItem.quantity++;
    } else {
      cart.push({
        productId: productId,
        quantity: 1
      });
    };
}