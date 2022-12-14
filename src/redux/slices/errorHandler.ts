import { createSlice } from "@reduxjs/toolkit";

const initialState: boolean = false;

export const errorHandlerSlice = createSlice({
  name: "errorHandler",
  initialState,
  reducers: {
    setError: (state, action: { payload: boolean }) => action.payload,
  },
});

export const { setError } = errorHandlerSlice.actions;

export default errorHandlerSlice.reducer;
