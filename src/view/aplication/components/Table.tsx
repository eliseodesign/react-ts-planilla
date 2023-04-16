const Table = () => {
  return ( 
    <div>
      TABLA DE EMPLEADOS

      <table>
          <thead>
            <tr>
              <th>*</th>
              <th>N°</th>
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
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>0</td>
              <td>Eliseo</td>
              <td>440</td>
              <td>49</td>
              <td>30</td>
              <td>10</td>
              <td>70</td>
              <td>380</td>
            </tr>
          </tbody>

        </table>
    </div>
   );
}
 
export default Table;