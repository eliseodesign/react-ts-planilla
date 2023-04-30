import { useContext, useRef } from "react";
import EmployeContext from "../../../shared/context/EmployeeContext";
import ToolContext from "../../../shared/context/ToolContext";

const Modal = () => {
  const { addEmployee } = useContext(EmployeContext)
  const { changeModal } = useContext(ToolContext)

  const inputNombres = useRef<HTMLInputElement>(null);
  const inputApelidos = useRef<HTMLInputElement>(null);
  const inputSalario = useRef<HTMLInputElement>(null);

  const guardarNuevo = () =>  {
    addEmployee({
      id: 0,
      nombre: `${inputNombres.current?.value} ${inputApelidos.current?.value}`,
      salario: Number(inputSalario.current?.value),
      iss: 0,
      afp: 0,
      isr: 0,
      descuento: 0,
      sujeto: 0,
    })
    changeModal(false)
  }
  const cancelarNuevo = () =>  changeModal(false);
  
  
  return ( 
    <section className="modal">
      <div className="modal__form">
        <h2>Agregar Nuevo Empleado</h2>
        <label>Nombres: </label> 
        <input 
          id="nombres" 
          ref={inputNombres}
          type="text"
        />

        <label>Apellidos: </label> 
        <input 
          id="apellidos" 
          ref = {inputApelidos}
          type="text"
        />

        <label>Salario: </label>
        <input 
          id="salario" 
          type="number"
          ref={inputSalario}
        />

        <div className="modal__btns">
          <button onClick={cancelarNuevo} className="btn-cancelar" >Cancelar</button>
          <button onClick={guardarNuevo} className="btn-guardar">Guardar</button>
        </div>
      </div>
    </section>
   );
}
 
export default Modal;