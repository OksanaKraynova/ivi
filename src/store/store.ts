import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authorizationReducer from "./reducers/authorizationSlice"
import { authApi } from "../services/authService";
import genresCountriesReducer from "./reducers/genresCountriesSlice";

const rootReducer = combineReducers({
  authorizationReducer,
  [authApi.reducerPath]: authApi.reducer,
  genresCountriesReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(authApi.middleware)
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch'];