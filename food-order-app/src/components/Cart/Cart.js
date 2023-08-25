import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const formatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  });
  

  const ctx = useContext(CartContext);
  
  
  const cartItems = ctx.items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      price={item.price}
      amount={item.amount}
      onAdd={() => ctx.addItem({
        id: item.id,
        name: item.name,
        amount: 1,
        price: item.price
      })}
      onRemove={() => ctx.removeItem(item.id)}
    />
  ));

  return (
    <Modal onClose={props.onClose}>
      <ul className={classes.cartItems}>
        {cartItems}
        <div className={classes.cartTotal}>
          <span>Total Amount</span>
          <span>{formatter.format(ctx.totalAmount)}</span>{" "}
        </div>
      </ul>
      <div className={classes.cartActions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
