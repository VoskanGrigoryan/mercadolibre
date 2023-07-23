import { createSlice } from "@reduxjs/toolkit";
import { fetchSpecificItems } from "../actions/items";
import { IItemsState } from "@/types/interfaces";

const initialState: IItemsState = {
  data: {},
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
};

export const items = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSpecificItems.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSpecificItems.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(fetchSpecificItems.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = action.payload;
    });
  },
});

export default items.reducer;
