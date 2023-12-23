// exampleReducer.ts
import { EXAMPLE_ACTION, ExampleAction } from '../actions/actionTypes';

export interface ExampleState {
  data: string; // Or whatever your data type is
  // Other properties as needed
}

const initialState: ExampleState = {
  data: '', // Initial state for 'data'
  // Other initial states
};

export const exampleReducer = (
  state: ExampleState = initialState,
  action: ExampleAction
): ExampleState => {
  switch (action.type) {
    case EXAMPLE_ACTION:
      return {
        ...state,
        data: action.payload,
      };
    // Other cases if needed
    default:
      return state;
  }
};