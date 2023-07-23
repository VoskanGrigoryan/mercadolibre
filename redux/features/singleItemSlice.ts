import { createSlice } from "@reduxjs/toolkit";
import { fetchItemById } from "../actions/items";
import { IItemState } from "@/types/interfaces";

const initialState: IItemState = {
  data: {},
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
};

export const items = createSlice({
  name: "item",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchItemById.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchItemById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(fetchItemById.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = action.payload;
    });
  },
});

export default items.reducer;
