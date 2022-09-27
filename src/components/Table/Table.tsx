import { useSelector } from "react-redux"
import { AppStore, store } from "../../redux/store"

function Table() {

  // const { results } = useSelector((store:AppStore)=>store.allApiResults);
  // console.log(results)
  return (
    <table>
      <thead>
        <tr>
          <td>id</td>
          <td>cityId</td>
          <td>name</td>
          <td>state</td>
          <td>Probability of precip</td>
          <td>Relativehu midity</td>
          <td>Lasteport time</td>
          <td>LLueve</td>
        </tr>
      </thead>
    </table>
  )
}
export default Table