import { Fragment, useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import CartSummary from "./CartSummary";
import CheckoutScreen from "../CheckoutForm/CheckoutScreen";
import CheckoutContext from "../../store/checkout-context";
import { SCREENS } from "../../store/CheckoutProvider";
import ThankYou from "../CheckoutForm/ThankYou";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const checkoutCtx = useContext(CheckoutContext);
  console.log(checkoutCtx.screen);
  
  return (
    <Fragment>
      {cartCtx.cartIsVisible && checkoutCtx.screen === SCREENS.SUMMARY && <CartSummary />}
      {cartCtx.cartIsVisible && checkoutCtx.screen === SCREENS.CHECKOUT_FORM && <CheckoutScreen />}
      {cartCtx.cartIsVisible && checkoutCtx.screen === SCREENS.THANK_YOU && <ThankYou />}
    </Fragment>
  );
};

export default Cart;
