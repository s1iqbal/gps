import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers'; // Your root reducer

const store = configureStore({
  reducer: rootReducer
  // Add any other middleware or dev tools if needed
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
