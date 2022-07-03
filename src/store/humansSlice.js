import { createSlice, nanoid } from "@reduxjs/toolkit";

const createHuman = (name) => ({
  id: nanoid(),
  name,
  taskIds: [],
});

const initialState = [
  createHuman("Steve"),
  createHuman("Mark"),
  createHuman("Tame"),
];

export const humansSlice = createSlice({
  name: "humans",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(createHuman(action.payload));
    },
  },
});
