import {addToCart, cart, loadFromStorage} from '../../data/cart.js';

describe('test suite: addToCart', () => {
  it('adds an existing product to the cart', () => {
   
  });

  it('adds a new product to the cart', () => {
    spyOn(localStorage, 'setItem').and.callFake(() => {});

    spyOn(localStorage, 'getItem').and.callFake(() => JSON.stringify([]));
    console.log(localStorage.getItem('cart'))
    loadFromStorage();
    addToCart( "e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart.length).toEqual(1);
    // addToCart( "15b6fc6f-327a-4ec4-896f-486349e85a3d");
    console.log(cart)
  });
});
