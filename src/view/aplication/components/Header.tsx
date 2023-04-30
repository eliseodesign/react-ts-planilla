import { useContext } from 'react';
import Context from '../../../shared/context/ToolContext';

const Header = () => {

  const { changeModal } = useContext(Context);

  const handleClick = () => {
    changeModal(true);
    console.log(true);
  };
  
  return ( 
    <header className="app-header">
      <h1>Gestor Employee</h1>
      <div className="buttons">
        <button onClick={handleClick} className="btn-primary">Crear nuevo</button>
        <button className="btn-primary">Eliminar</button>
      </div>
    </header>
  );
};
 
export default Header;
