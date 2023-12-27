export const EXAMPLE_ACTION = 'EXAMPLE_ACTION';

export interface ExampleAction {
  type: typeof EXAMPLE_ACTION;
  payload: string; // Replace with your payload type
}