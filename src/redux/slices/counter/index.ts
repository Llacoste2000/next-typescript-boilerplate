import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICounter {
    count: number;
}

const initialState: ICounter = {
    count: 20,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increase: (state) => {
            state.count++;
        },
        decrease: (state) => {
            state.count--;
        },
        increaseBy: (state, action: PayloadAction<{ addCount: number }>) => {
            state.count += action.payload.addCount;
        },
    },
});

export const { increase, decrease, increaseBy } = counterSlice.actions;

export default counterSlice.reducer;
