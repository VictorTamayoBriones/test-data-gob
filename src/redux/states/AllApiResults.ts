import { createSlice } from "@reduxjs/toolkit";
import { resultsModel } from "../../models/resultModel";

export interface data{
    results: resultsModel[]
}

const INITIAL_STATE: data = {
    results:[]
};

export const AllApiResults = createSlice({
    name: 'allApiResults',
    initialState: INITIAL_STATE,
    reducers:{
        getAllAPiResults: (state, action) => {
            const results:resultsModel[] = action.payload.results;
            const res ={
                results: results
            }
            return res;
        }
    }
});

export const { getAllAPiResults } = AllApiResults.actions
export default AllApiResults.reducer;