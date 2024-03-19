import { configureStore } from '@reduxjs/toolkit'
import { servicesReducer } from './services';
import { uiStatesReducer } from './uiStates';

export const store = configureStore({
  reducer: {
    services: servicesReducer,
    uiStates: uiStatesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;