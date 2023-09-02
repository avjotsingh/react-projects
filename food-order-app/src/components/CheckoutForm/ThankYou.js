import { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import classes from './ThankYou.module.css'
import CheckoutContext from "../../store/checkout-context";
import { SCREENS } from "../../store/CheckoutProvider";

const ThankYou = props => {

    const cartCtx = useContext(CartContext);
    const checkoutCtx = useContext(CheckoutContext);

    const closeHandler = (event) => {
        cartCtx.hideCart();
        cartCtx.resetCart();
        checkoutCtx.reset();
    }

    return <Modal onClose={closeHandler}>
        <div className={classes.thanks}>
            <p>Thank you for placing an order with us!</p>
        </div>
        <div className={classes.actions}>
            <button type="button" className="button" onClick={closeHandler}>Close</button>
        </div>
    </Modal>
}

export default ThankYou;