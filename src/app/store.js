import { configureStore } from '@reduxjs/toolkit';
import alarmReducer from '../features/alarms/alarmSlice';

export const store = configureStore({
  reducer: {
    alarms: alarmReducer,
  },
});