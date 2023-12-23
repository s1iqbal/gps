// reducers/index.ts
import { combineReducers } from '@reduxjs/toolkit';
import { exampleReducer } from './exampleReducer'; // Import your reducers
import counterReducer, { CounterState } from './counterReducer';
import formReducer from './formReducer';
import { Place } from '../interfaces/Place';

export interface RootState {
  form: {
    pointA: Place;
    pointB: Place;
  }
  counter: CounterState;
  // Add other slices of state here
}

const rootReducer = combineReducers({
  // Add reducers here
  example: exampleReducer,
  counter: counterReducer,
  form: formReducer
});

export default rootReducer;
