import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { resultsModel } from "../models/resultModel";
import { AppStore, store } from "../redux/store";
import { TableContext } from "./TableContext"

interface Props{
    children: JSX.Element[]
}

export const TableProvider = ({children}:Props) =>{

    const [currentTenResults, setCurrentTenResults]=useState<resultsModel[]>([]);

    const reduxResults= useSelector((store:AppStore)=>store.allApiResults)[0];

    useEffect(()=>{
        setCurrentTenResults(reduxResults[0]);
    },[]);

    const handlePagination=(num:number)=>{
        setCurrentTenResults(reduxResults[num])
    }

    const handleById = (id: string) =>{
        setCurrentTenResults(currentTenResults.filter(res => res._id === id))        
    }

    return(
        <TableContext.Provider value={{currentTenResults, handlePagination, handleById}} >
            {children}
        </TableContext.Provider>
    )
}