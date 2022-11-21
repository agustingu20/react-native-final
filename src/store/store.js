import { configureStore } from '@reduxjs/toolkit';
import selectedBenefitSlice from './selectedBenefitSlice';

export const store = configureStore({
  reducer: {
    benefit: selectedBenefitSlice,
  },
});
