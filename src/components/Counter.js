import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Correct import statement
import classes from './Counter.module.css';
import { increment,decrement,increase,toggle } from '../store/CounterSlice';

const Counter = () => {
  const counter = useSelector((store) => store.counter.counterValue);
  const toggleCounter= useSelector((store)=>store.counter.showCounter)
  const dispatch = useDispatch(); // Added useDispatch hook

  const toggleCounterHandler = () => {
    // Implement the logic for toggling the counter if needed
    dispatch(toggle());
  };

  const incrementHandler = () => {
    // Dispatch an action to increment the counter
    dispatch(increment()); // Replace 'INCREMENT' with your actual action type
  };

  const decrementHandler = () => {
    // Dispatch an action to decrement the counter
    dispatch(decrement()); // Replace 'DECREMENT' with your actual action type
  };

  const increaseHandler = () => {
    // Dispatch an action to increase the counter (replace with your actual action type)
    dispatch(increase(5) ); // Example: Increase by 5, adjust as needed
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggleCounter&&<div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase</button>
      </div>
       <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
