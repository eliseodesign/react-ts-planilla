import { useContext, useState } from "react";
const Modal = () => {
  
  return ( 
    <section className="modal">
      <div className="modal__form">
        <h2>Agregar Nuevo Empleado</h2>
        <label>Nombres: </label> <input id="nombres" type="text"/>
        <label>Apellidos: </label> <input id="apellidos" type="text"/>
        <label>Salario: </label> <input id="salario" type="number"/>

        <div className="modal__btns">
          <button className="btn-cancelar" >Cancelar</button>
          <button className="btn-guardar">Guardar</button>
        </div>
      </div>
    </section>
   );
}
 
export default Modal;