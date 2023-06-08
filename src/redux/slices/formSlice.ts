import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface FormState {}

const initialState: FormState = {
  cards: [],
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<Object>) => {
      state.cards.push(action.payload);
    },
  },
});

export const { addCard } = formSlice.actions;

export default formSlice.reducer;
