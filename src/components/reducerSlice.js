import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFood = createAsyncThunk(
    'food/fetchFood',
    async () => {
        const response = await axios(`http://127.0.0.1:8000/food/`);
        return response.data
    }
)
export const fetchFoodEl = createAsyncThunk(
    'food/fetchFoodEl',
    async (food_id) => {
        const response = await axios(`http://127.0.0.1:8000/food/${food_id}/`);
        return response.data
    }
)
const slice = createSlice({
    name: "toolkit",
    initialState: {
        isLoading: true,
        food: [],
        foodEl: null,
        foodState: 'loading',
        foodError: 'null',
    },
    reducers: {
        setLoading(state, action) {
            state.isLoading = action.payload;
        },
        loadFoods(state, action) {
            state.food = action.payload;
        },
        loadFood(state, action) {
            state.food.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder
            .addCase(fetchFood.pending, (state, action) => {
                // state.foodStatus = 'loading'
                state.isLoading = true
            })
            .addCase(fetchFood.fulfilled, (state, action) => {
                // Add user to the state array
                state.food = action.payload
                // state.foodStatus = 'success'
                state.isLoading = false
            })
            .addCase(fetchFood.rejected, (state, action) => {
                // state.foodStatus = 'failed'
                // state.foodError = action.error.message
                state.isLoading = false
            })
            .addCase(fetchFoodEl.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(fetchFoodEl.fulfilled, (state, action) => {
                state.foodEl = action.payload
                state.isLoading = false
            })
            .addCase(fetchFoodEl.rejected, (state, action) => {
                state.isLoading = false
            })
    },
});
export default slice.reducer;
export const {loadFoods, loadFood, setLoading} = slice.actions;