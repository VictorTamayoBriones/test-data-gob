import { createContext } from "react";
import { resultsModel } from "../models/resultModel";

interface TableState{
    currentTenResults: resultsModel[],
    handlePagination: (num:number)=>void
}

export const TableContext = createContext( {} as TableState );