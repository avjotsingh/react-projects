import classes from './CartItem.module.css'

const CartItem = props => {
    return <div className={classes.cartItem}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.summary}>
                <span className={classes.price}>{props.price}</span>
                <span className={classes.amount}>{`x ${props.amount}`}</span>
            </div>
        </div>
        <div className={classes.actions}>
            <button onClick={props.onRemove}>-</button>
            <button onClick={props.onAdd}>+</button>
        </div>
    </div>
}

export default CartItem;