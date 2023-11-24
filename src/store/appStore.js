import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";
import authReducer from "./authSlice";


const appStore = configureStore({

    reducer:{
        counter:counterReducer,
        auth:authReducer
    },
});

export default appStore;