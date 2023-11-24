import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"counter",
    initialState:{counterValue:0,showCounter:true},
    reducers:{
        increment(state){
            state.counterValue=state.counterValue+1;
        },
        decrement(state){
            state.counterValue=state.counterValue-1;
        },
        increase(state,action){
            state.counterValue=state.counterValue+action.payload;
        },
        toggle(state){
            state.showCounter=!state.showCounter;
        }

    }
});

export default counterSlice.reducer;
export const {increment,decrement,increase,toggle} = counterSlice.actions;