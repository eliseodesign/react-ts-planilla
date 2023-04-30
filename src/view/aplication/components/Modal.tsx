const Modal = () => {
  return ( 
    <section className="modal">
      <div className="moda__form">
        <h2>Agregar Nuevo Empleado</h2>
        <label>Nombres: </label> <input id="nombres" type="text" placeholder="Nombres empleado"/>
        <label>Apellidos: </label> <input id="apellidos" type="text" placeholder="Apellidos empleado"/>
        <label>Salario: </label> <input id="salario" type="number" placeholder="Salario"/>
      </div>
    </section>
   );
}
 
export default Modal;