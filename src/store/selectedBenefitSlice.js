import { createSlice } from '@reduxjs/toolkit';

const selectedBenefitSlice = createSlice({
  name: 'selectedBenefit',
  initialState: {},
  reducers: {
    setSelectedBenefit(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setSelectedBenefit } = selectedBenefitSlice.actions;
export default selectedBenefitSlice.reducer;
