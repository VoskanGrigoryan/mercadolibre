import api from "@/config/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchItems = createAsyncThunk("items/getItemsList", async () => {
  const response = await api.get(`sites/MLA/search?q=:query`);
  return response.data;
});

export const fetchSpecificItems = createAsyncThunk(
  "items/getItemsList",
  async (item: string | null) => {
    const response = await api.get(`sites/MLA/search?q=:${item}`);
    return response.data;
  }
);

export const fetchItemById = createAsyncThunk(
  "item/getItemById",
  async (id: string | null) => {
    const response = await api.get(`items/${id}`);
    return response.data;
  }
);
