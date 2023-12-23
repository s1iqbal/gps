// actions/counterActions.ts
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

interface IncrementAction {
  type: typeof INCREMENT;
}

interface DecrementAction {
  type: typeof DECREMENT;
}

export const increment = (): IncrementAction => ({
  type: INCREMENT,
});

export const decrement = (): DecrementAction => ({
  type: DECREMENT,
});

export type CounterAction = IncrementAction | DecrementAction;