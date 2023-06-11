import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getData from "@/src/functions/getData";
import Urls from "@/types/Urls";
import IData from "@/types/IData";
import IGenre from "@/types/IGenre";
import ICountry from "@/types/ICountry";

interface MoviesPropsState {
    genres: IGenre[];
    countries: ICountry[];
    status: { genres: string | null, countries: string | null };
    error: { genres: string, countries: string }
}

const initialState: MoviesPropsState = {
    genres: [],
    countries: [],
    status: { genres: null, countries: null },
    error: { genres: "", countries: "" }
}

export const fetchGenres = createAsyncThunk('genresCountries/fetchGenres', async () => {
    const response = await getData<IData<IGenre[]>>(Urls.SERVER_PORT, Urls.ALL_GANRES);
    return response ? response.items : [];
});

export const fetchCountries = createAsyncThunk('genresCountries/fetchCountries', async () => {
    const response = await getData<IData<ICountry[]>>(Urls.SERVER_PORT, Urls.ALL_COUNTRIES);
    return response ? response.items : [];
});

export const genresCountriesSlice = createSlice({
    name: 'genresCountries',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(fetchGenres.pending, (state) => {
                state.status.genres = "loading";
                state.error.genres = "";
            })
            .addCase(fetchGenres.fulfilled, (state, action) => {
                state.status.genres = "resolved";
                state.error.genres = "";
                state.genres = action.payload;
            })
            .addCase(fetchGenres.rejected, (state, action) => {
                state.status.genres = "failed";
                state.error.genres = action.error.message ?? "";
            })
            .addCase(fetchCountries.pending, (state) => {
                state.status.countries = "loading";
                state.error.countries = "";
            })
            .addCase(fetchCountries.fulfilled, (state, action) => {
                state.status.countries = "resolved";
                state.error.countries = "";
                state.countries = action.payload;
            })
            .addCase(fetchCountries.rejected, (state, action) => {
                state.status.countries = "failed";
                state.error.countries = action.error.message ?? "";
            })
    }
})

export default genresCountriesSlice.reducer;