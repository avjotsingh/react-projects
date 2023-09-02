import CartContext from "./cart-context";
import {useReducer} from 'react';

const defaultCartState = {
    cartIsVisible: false,
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {
    if (action.type === 'SHOW_CART') {
        console.log('Show cart modal');
        return {
            ...state,
            cartIsVisible: true
        }
    } else if (action.type === 'HIDE_CART') {
        console.log('Hide cart modal');
        return {
            ...state,
            cartIsVisible: false
        }
    } else if (action.type === 'ADD') {
        console.log('item to add ', action.item)
        const itemIndex = state.items.findIndex(item => item.id === action.item.id)
        console.log('item index', itemIndex)
        // Check if item already exists
        let updatedItems;
        if (itemIndex >= 0) {
            updatedItems = [...state.items]
            updatedItems[itemIndex].amount += action.item.amount
        } else {
            updatedItems = [...state.items, action.item]
        }

        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            cartIsVisible: state.cartIsVisible,
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    } else if (action.type === 'REMOVE') {
        console.log('remove item request', action)
        const itemIndex = state.items.findIndex(item => item.id === action.id);
        console.log('remove item index', itemIndex);
        // Check if item exists
        let updatedItems;
        if (itemIndex >= 0) {
            updatedItems = [...state.items];
            updatedItems[itemIndex].amount -= 1;
            const updatedTotalAmount = state.totalAmount - updatedItems[itemIndex].price
            updatedItems = updatedItems.filter(item => item.amount > 0)
            return {
                cartIsVisible: state.cartIsVisible,
                items: updatedItems,
                totalAmount: updatedTotalAmount
            }
        }
    }
    return defaultCartState;
}


const CartProvider = props => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const showCartHandler = () => {
        dispatchCartAction({
            type: 'SHOW_CART'
        })
    }

    const hideCartHandler = () => {
        dispatchCartAction({
            type: 'HIDE_CART'
        })
    }

    const addItemToCartHandler = (item) => {
        dispatchCartAction({
            type: 'ADD',
            item: item
        })
    }

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({
            type: 'REMOVE',
            id: id
        })
    }

    const resetCartHandler = () => {
        dispatchCartAction({})
    }

    const cartContext = {
        ...cartState,
        showCart: showCartHandler,
        hideCart: hideCartHandler,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        resetCart: resetCartHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;