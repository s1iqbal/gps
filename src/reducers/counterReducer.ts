// reducers/counterReducer.ts
import { CounterAction, INCREMENT, DECREMENT } from '../actions/counterActions';

export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

const counterReducer = (
  state = initialState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
