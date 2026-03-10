import { configureStore } from "@reduxjs/toolkit";
// import { createWrapper } from 'next-redux-wrapper';
// import counterReducer from './slices/counterSlice';

// Create makeStore
export const makeStore = () => {
   return configureStore({
      reducer: {}
   });
};

// Export store wrapper for SSR compatibility
// export const wrapper = createWrapper(makeStore);
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
