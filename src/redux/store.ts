import { configureStore } from "@reduxjs/toolkit";
import { resultsModel } from "../models/resultModel";
import AllApiResults from "./states/AllApiResults";

export interface AppStore{
    allApiResults: resultsModel[][][]
}

export const store = configureStore({
    reducer:{
        allApiResults: AllApiResults
    }
});