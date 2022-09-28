import { useContext } from "react";
import { useSelector } from "react-redux"
import { TableContext } from "../../context/TableContext";
import { AppStore } from "../../redux/store"

function Pagination() {

  const results = useSelector((store:AppStore)=>store.allApiResults)[0];
  const { handlePagination} =useContext(TableContext);

  return (
    <div className="navigation" >
      {results.map((result, i)=>(
          <p key={`num-pag-${i+1}`} onClick={()=>handlePagination(i)} >{i+1}</p>
      ))}
    </div>
  )
}
export default Pagination