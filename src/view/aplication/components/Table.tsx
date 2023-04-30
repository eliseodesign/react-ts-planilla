import { useContext } from "react";
import EmployeContext from "../../../shared/context/EmployeeContext";

const Table = () => {

  const { employees } = useContext(EmployeContext)
  console.log(employees)
  return (
    <div>
      TABLA DE EMPLEADOS

      <table>
        <thead>
          <tr>
            <th>*</th>
            <th>ID</th>
            <th>Nombre</th>
            <th>Sueldo</th>
            <th>ISSS</th>
            <th>AFP</th>
            <th>ISR</th>
            <th>Total Retención</th>
            <th>Sujeto</th>
          </tr>

        </thead>

        <tbody>
          {employees.map(el =>{
            return(
              <tr key={el.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{el.id}</td>
                <td>{el.nombre}</td>
                <td>{el.salario}</td>
                <td>{el.iss}</td>
                <td>{el.afp}</td>
                <td>{el.isr}</td>
                <td>{el.descuento}</td>
                <td>{el.sujeto}</td>
              </tr>
            )
          })}
        </tbody>

      </table>
    </div>
  );
}

export default Table;