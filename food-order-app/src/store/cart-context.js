import React from 'react';

const CartContext = React.createContext({
    cartIsVisible: false,
    items: [],
    totalAmount: 0,
    showCart: () => {},
    hideCart: () => {},
    addItem: (item) => {},
    removeItem: (id) => {},
    resetCart: () => {}
});

export default CartContext;