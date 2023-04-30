import { createContext, useState } from "react";
import IEmployee from "../interfaces/Employee"
import calcularRenta from "../utils/CalcularIsr";

// interface de contexto
interface IEmployeeContext {
  employees: IEmployee[],
  addEmployee: (e: IEmployee) => boolean,
  removeEmployee: (id: number) => boolean,
  editEmployee: (e: IEmployee) => boolean
}

// contexto
const EmployeContext = createContext<IEmployeeContext>({
  employees: [],
  addEmployee: (e: IEmployee) => true,
  removeEmployee: (id: number) => true,
  editEmployee: (e: IEmployee) => true
})

// proveedor
export const EmployeeProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [employees, setEmployees] = useState<IEmployee[]>([{
    id: 1,
    nombre: "Eliseo",
    salario: 12,
    iss: 212,
    afp: 212,
    isr: 212,
    descuento: 12,
    sujeto: 212,
  }])
  
  const addEmployee = (e: IEmployee): boolean => {
    let ids = employees.map(el => el.id)
    e.id = Math.max(...ids) +1;
    e.iss = e.salario * 0.03;
    e.afp = e.salario * 0.0725;
    e.isr = calcularRenta(e.salario - (e.iss + e.afp));
    e.descuento = e.iss + e.afp + e.isr;
    e.sujeto = e.salario - e.descuento;
  
    setEmployees([...employees, e]);
    return true;
  }

  const removeEmployee = (id: number): boolean => {
    const indice = employees.findIndex(el => el.id === id);
    if (indice !== -1) {
      setEmployees(employees.filter(el => el.id !== id));
      return true;
    }
    return false;
  }

  const editEmployee = (emp: IEmployee): boolean => {
    const indice = employees.findIndex(el => el.id === emp.id);
    if (indice !== -1) {
      setEmployees(employees.map( (el => el.id === emp.id? emp: el)));
      return true;
    }
    return false;
  }

  return (
    <EmployeContext.Provider value={{ employees, addEmployee, removeEmployee, editEmployee }}>
      {children}
    </EmployeContext.Provider>
  )
}

export default EmployeContext;
