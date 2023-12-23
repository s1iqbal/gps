import { EXAMPLE_ACTION, ExampleAction } from './actionTypes';

export const exampleAction = (data: string): ExampleAction => ({
  type: EXAMPLE_ACTION,
  payload: data,
});