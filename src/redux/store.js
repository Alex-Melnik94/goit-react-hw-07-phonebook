import { configureStore } from '@reduxjs/toolkit';
import phonebookReducer from './phonebook/slices/phonebookSlice';
import filterReducer from './phonebook/slices/filterSlice';

const rootReducer = {
  phonebook: phonebookReducer,
  filter: filterReducer,
};

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
