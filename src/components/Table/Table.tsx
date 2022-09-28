import { TableProvider } from "../../context/TableContextProvider"
import { Pagination } from "../Pagination"
import { TBody } from "./components/TBody"
import Thead from "./components/Thead/Thead"

function Table() {

  return (
    <TableProvider>
      <table>
        <Thead/>
        <TBody/>
      </table>
      <Pagination/>
    </TableProvider>
  )
}
export default Table