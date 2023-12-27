// reducers/formReducer.ts
import { Place } from '../interfaces/Place';
import { FETCH_POINT_A_SUCCESS, FETCH_POINT_B_SUCCESS } from '../actions/formActions';

interface FormState {
  pointA: Place;
  pointB: Place;
}

const initialState: FormState = {
  pointA: {} as Place,
  pointB: {} as Place,
};

const formReducer = (state = initialState, action: { type: unknown; payload: Place; }): FormState => {
  switch (action.type) {
    case FETCH_POINT_A_SUCCESS:
      return {
        ...state,
        pointA: action.payload,
      };
    case FETCH_POINT_B_SUCCESS:
      return {
        ...state,
        pointB: action.payload,
      };
    default:
      return state;
  }
};

export default formReducer;
