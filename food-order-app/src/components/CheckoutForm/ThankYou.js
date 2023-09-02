import { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import classes from './ThankYou.module.css'
import CheckoutContext from "../../store/checkout-context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'


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
            <p className={classes.small}>Thank you for placing an order with us!</p>
        </div>
        <div className={classes.cartActions}>
            <button type="button" className={classes['button--alt']} onClick={closeHandler}>Close</button>
        </div>
    </Modal>
}

export default ThankYou;