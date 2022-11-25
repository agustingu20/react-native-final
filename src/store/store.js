import { configureStore } from '@reduxjs/toolkit';
import selectedBenefitSlice from './selectedBenefitSlice';
import tokenSlice from './tokenSlice';
import userSlice from './userSlice';

export const store = configureStore({
  reducer: {
    benefit: selectedBenefitSlice,
    token: tokenSlice,
    user: userSlice,
  },
});
