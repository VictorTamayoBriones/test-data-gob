import { createSlice } from "@reduxjs/toolkit";
import { resultsModel } from "../../models/resultModel";

const INITIAL_STATE: resultsModel[][][] = []

const divideArr = (allResults: resultsModel[])=>{

        const arrDivide:resultsModel[][] = []
        let subArr:resultsModel[] = [] 
    
        allResults.forEach((result, i) =>{
            subArr.push(result);

            if( i !== 0){
                if((i + 1)/10 %1 === 0){
                    arrDivide.push(subArr)
                    subArr = []
                }
            }

        })
        return arrDivide
}

export const AllApiResults = createSlice({
    name: 'allApiResults',
    initialState: INITIAL_STATE,
    reducers:{
        getAllApiResults: (state, action) => {
            const results = divideArr(action.payload.results);
            state.push(results);
        }
    }
});

export const { getAllApiResults } = AllApiResults.actions
export default AllApiResults.reducer;