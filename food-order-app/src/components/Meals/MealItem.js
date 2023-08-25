import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from '../../store/cart-context';
import {useContext} from 'react';

const MealItem = (props) => {
  const formatter = new Intl.NumberFormat('en-US', { 
    style: 'currency',
    currency: 'INR' 
  });

  const ctx = useContext(CartContext);
  const addItemHandler = amount => {
    console.log('amount', amount)
    ctx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount
    })
  }

  return (
    <li className={classes.mealItem}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.mealDescription}>{props.description}</div>
        <div className={classes.mealPrice}>{formatter.format(props.price)}</div>
      </div>
      <MealItemForm id={props.id} onAddItem={addItemHandler} />
    </li>
  );
};

export default MealItem;
