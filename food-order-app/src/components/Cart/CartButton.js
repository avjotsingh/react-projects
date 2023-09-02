import classes from "./CartButton.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const CartButton = (props) => {
  const ctx = useContext(CartContext);
  const { items: cartItems } = ctx;
  const numItems = cartItems.reduce((prev, cur) => prev + cur.amount, 0);

  const [isHighlighted, setIsHighlighted] = useState(false);
  let btnClasses = `${classes.cartButton} ${isHighlighted ? classes.bump : ""}`;

  useEffect(() => {
    if (cartItems.length === 0) return;
    setIsHighlighted(true);

    const timer = setTimeout(() => {
      setIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartItems]);

  return (
    <button className={btnClasses} onClick={ctx.showCart}>
      <span className={classes.icon}>
        <i className="fa fa-shopping-cart"></i>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge} onClick={() => setIsHighlighted(false)}>
        {numItems}
      </span>
    </button>
  );
};

export default CartButton;
