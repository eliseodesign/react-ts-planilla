import { createContext, useState } from "react";
import IEmployee from "../interfaces/Employee"

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
export const Provider: React.FC = ({ children }: React.PropsWithChildren<{}>) => {
  const [employees, setEmployees] = useState<IEmployee[]>([])
  const addEmployee = (e: IEmployee): boolean => {
    let ids = employees.map(el => el.id)
    e.id = Math.max(...ids) +1;
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
