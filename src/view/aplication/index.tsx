import Header from "./components/Header";
import Table from "./components/Table";
import ToolContext from '../../shared/context/ToolContext'
import { useContext } from "react";
import Modal from "./components/Modal";

const App = () => {
  const {modalActive} = useContext(ToolContext)

  return ( 
    <div className="aplication">
      <Header />
      <Table />
      {modalActive? <Modal /> : null}
    </div> 
  );
}
 
export default App;