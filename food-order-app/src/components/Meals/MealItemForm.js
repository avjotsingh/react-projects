import Input from '../UI/Input';
import classes from './MealItemForm.module.css'
import {useRef} from 'react';

const MealItemForm = props => {

    const submitHandler = event => {
        event.preventDefault();
        console.log(amountRef.current);
        props.onAddItem(Number(amountRef.current.value));
    }

    const amountRef = useRef();

    return <form className={classes.mealItemForm} onSubmit={submitHandler}>
        <Input ref={amountRef} id={props.id} type='number' step='1' min='1' max='5' label='Amount' defaultValue='1' />
        <button>+ Add</button>
    </form>
}

export default MealItemForm;