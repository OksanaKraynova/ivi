import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userReducer from "./reducers/UserSlice"
import { authApi } from "../services/authService";
import genresCountriesReducer from "./reducers/genresCountriesSlice";

const rootReducer = combineReducers({
    // userReducer,
    // [authApi.reducerPath]: authApi.reducer
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