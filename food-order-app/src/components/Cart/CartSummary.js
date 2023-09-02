import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";

import classes from "./Cart.module.css";
import CheckoutContext from "../../store/checkout-context";
import { SCREENS } from "../../store/CheckoutProvider";

const CartSummary = (props) => {
  const formatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  });

  const cartCtx = useContext(CartContext);
  const checkoutCtx = useContext(CheckoutContext);

  console.log('cart total amount', cartCtx.totalAmount)

  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      price={item.price}
      amount={item.amount}
      onAdd={() =>
        cartCtx.addItem({
          id: item.id,
          name: item.name,
          amount: 1,
          price: item.price,
        })
      }
      onRemove={() => cartCtx.removeItem(item.id)}
    />
  ));

  const orderHandler = (event) => {
    checkoutCtx.setScreen(SCREENS.CHECKOUT_FORM);
  }

  return (
    <Modal onClose={cartCtx.hideCart}>
      <ul className={classes.cartItems}>
        {cartItems}
        <div className={classes.cartTotal}>
          <span>Total Amount</span>
          <span>{formatter.format(cartCtx.totalAmount)}</span>{" "}
        </div>
      </ul>
      <div className={classes.cartActions}>
        <button className={classes["button--alt"]} onClick={cartCtx.hideCart}>
          Close
        </button>
        <button className={classes.button} disabled={cartCtx.totalAmount <= 0} onClick={orderHandler}>
          Order
        </button>
      </div>
    </Modal>
  );
};

export default CartSummary;
