import { useState } from "react";
import CheckoutContext from "./checkout-context";


export const SCREENS = {
    SUMMARY: 'summary',
    CHECKOUT_FORM: 'checkout_form',
    THANK_YOU: 'thank_you'
};

const DEFAULT_CHECKOUT_CONTEXT = SCREENS.SUMMARY;

const CheckoutProvider = (props) => {
  const [checkoutState, setCheckoutState] = useState(DEFAULT_CHECKOUT_CONTEXT);
  const checkoutContext = {
    screen: checkoutState,
    setScreen: setCheckoutState,
    reset: () => setCheckoutState(DEFAULT_CHECKOUT_CONTEXT)
  }

  console.log('checkout context', checkoutContext)

  return (
    <CheckoutContext.Provider value={checkoutContext}>
      {props.children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutProvider;
