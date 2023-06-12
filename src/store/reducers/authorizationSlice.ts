import { ActionCreator, createSlice } from "@reduxjs/toolkit";
import { count } from "console";


interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
}

interface UserState {
  user: User | null;

}

const initialState: UserState = {
  user: null,
}

export const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload
    }
  }
})

export default authorizationSlice.reducer;