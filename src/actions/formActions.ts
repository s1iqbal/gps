import { Dispatch } from 'redux';
import geocodeAddress from '../controllers/geocode'; // Assuming this fetches data

export const FETCH_POINT_A_SUCCESS = 'FETCH_POINT_A_SUCCESS';
export const FETCH_POINT_B_SUCCESS = 'FETCH_POINT_B_SUCCESS';

export const fetchPointA = (location: string = 'University of Toronto') => (
  dispatch: Dispatch
) => {
  geocodeAddress(location)
    .then((place) => {
      dispatch({ type: FETCH_POINT_A_SUCCESS, payload: place });
    })
    .catch((error: Error) => {
      console.log(error)
    });
};


export const fetchPointB = (location: string = 'Ryerson University') => (
  dispatch: Dispatch
) => {
  geocodeAddress(location)
    .then((place) => {
      dispatch({ type: FETCH_POINT_B_SUCCESS, payload: place });
    })
    .catch((error: Error) => {
      console.log(error)
    });
};
