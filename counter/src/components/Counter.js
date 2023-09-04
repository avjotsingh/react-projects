import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);

  const incrementHandler = (amount) => {
    dispatch({
      type: 'increment',
      amount: amount
    })
  }

  const decrementHandler = (amount) => {
    dispatch({
      type: 'decrement',
      amount: amount
    })
  }

  const toggleCounterHandler = () => {
    dispatch({
      type: 'toggle'
    })
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div className={classes.incrDecr}>
        <button onClick={incrementHandler.bind(null, 1)}>Increment</button>
        <button onClick={incrementHandler.bind(null, 5)}>Increment by 5</button>
        <button onClick={decrementHandler.bind(null, 1)}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
