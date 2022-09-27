import { configureStore } from "@reduxjs/toolkit";
import AllApiResults, { data } from "./states/AllApiResults";

export interface AppStore{
    allApiResults: data
}

export const store = configureStore({
    reducer:{
        allAPiResults: AllApiResults
    }
});