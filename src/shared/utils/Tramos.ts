export interface ITramo {
  desde: number,
  hasta: number,
  porcentaje: number,
  exceso: number,
  cuota: number
}
export const Tramos:  Record<string, ITramo>  = {
  tramo1:{
    desde:0.01,
    hasta:472.00,
    porcentaje:0,
    exceso:0,
    cuota:0
  },
  tramo2:{
    desde:472.01,
    hasta:859.24,
    porcentaje:0.1,
    exceso:472.00,
    cuota:17.67
  },
  tramo3:{
    desde:859.25,
    hasta:2038.10,
    porcentaje:0.2,
    exceso:859.24,
    cuota:60.00
  },
  tramo4:{
    desde:2038.11,
    hasta:Infinity ,
    porcentaje:0.3,
    exceso:2038.10,
    cuota:288.57
  },
  
}