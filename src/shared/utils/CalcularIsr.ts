import { Tramos, ITramo } from "./Tramos";

function calcularDeduccionRenta(salario: number): number {
  let deduccion = 0;
  for (const tramoKey in Tramos) {
    const tramo: ITramo = Tramos[tramoKey];
    if (salario > tramo.desde && salario <= tramo.hasta) {
      deduccion = (salario - tramo.exceso) * tramo.porcentaje + tramo.cuota;
      break;
    }
  }
  return deduccion;
}


export default calcularDeduccionRenta;