import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IUser from "@/types/IUser";

function initialUser() {
  const item = typeof window !== "undefined" ? localStorage.getItem('IVIUserData') : null;
  return item ? JSON.parse(item) : null;
}

interface AuthPropsSate {
  userData: IUser | undefined;
}

const initialState: AuthPropsSate = {
  userData: initialUser()
}

export const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    handleLogin(state, action: PayloadAction<IUser>) {
      action.payload.access_token && (
        localStorage.setItem('IVIAccessToken', action.payload.access_token),
        delete action.payload.access_token,
        state.userData = action.payload,
        localStorage.setItem('IVIUserData', JSON.stringify(action.payload))
      )
    },
    handleLogout(state) {
      state.userData = undefined
      localStorage.removeItem('IVIUserData')
      localStorage.removeItem('IVIAccessToken')
    },
  }
})

export const { handleLogin, handleLogout } = authorizationSlice.actions;
export default authorizationSlice.reducer;