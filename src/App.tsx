import { useEffect, useState } from "react"
import { useDispatch} from "react-redux";
import { Table } from "./components/Table";
import { getAllApiResults } from "./redux/states/AllApiResults";
import { getDataGob } from "./service/getDataGob";

function App() {
  const dispatch = useDispatch();
  
  const [isLoading, setIsLoading]=useState(true)

  const setAllDataGobToRedux = async()=>{
    dispatch(getAllApiResults(await getDataGob()))
    setIsLoading(false);
  }

  useEffect(()=>{
    setAllDataGobToRedux();
  }, [])

  return (
    <div className="App">
      <h1>Condiciones Atmosfericas</h1>
      {isLoading === false ? <Table/> : <p>Cargando datos...</p>}
    </div>
  )
}

export default App
