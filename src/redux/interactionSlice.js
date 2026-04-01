import { createSlice } from "@reduxjs/toolkit";

const interactionSlice = createSlice({
  name: "interaction",
  initialState: {
    data: {},
  },
  reducers: {
    setInteraction: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setInteraction } = interactionSlice.actions;
export default interactionSlice.reducer;