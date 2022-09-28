import { useContext, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { TableContext } from "../../../../context/TableContext"
import { AppStore } from "../../../../redux/store"

function TBody() {

    const { currentTenResults, handleById } = useContext(TableContext)

    return (
        <tbody>
            {
                currentTenResults.map(result =>{
                   return(
                    <tr key={result._id} onClick={()=>handleById(result._id)}  >
                        <td>{result._id}</td>
                        <td>{result.cityid}</td>
                        <td>{result.name}</td>
                        <td>{result.state}</td>
                        <td>{result.probabilityofprecip}</td>
                        <td>{result.relativehumidity}</td>
                        <td>{result.lastreporttime}</td>
                        <td>{ parseInt(result.probabilityofprecip) > 60 || parseInt(result.relativehumidity) > 50 ? <p>Llueve</p> : <p>No llueve</p>}</td>
                    </tr>
                   )
                })
            }
        </tbody>
    )
}
export default TBody