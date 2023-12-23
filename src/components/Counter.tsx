import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducers'; // Path to your RootState type
import { increment, decrement } from '../actions/counterActions'; // Path to your action creators

const Counter: React.FC = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.count); // Accessing the 'count' property from the 'counter' slice

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;