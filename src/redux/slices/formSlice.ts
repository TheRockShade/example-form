import { formCardType } from "@/data/formData";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: formCardType[] = [];

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<formCardType>) => {
      state.push(action.payload);
    },
    deleteCard: (state, action: PayloadAction<string>) => {
			return state = state.filter((card) => card.id !== action.payload);
    },
  },
});

export const { addCard, deleteCard } = formSlice.actions;

export default formSlice.reducer;
