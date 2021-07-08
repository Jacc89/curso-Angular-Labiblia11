import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  arrEmpleado: Empleado[];

  constructor() {
    this.arrEmpleado = [];
  }

  getAll(): Promise<Empleado[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrEmpleado);
    });
  }

  insert(pEmpleado) {
    this.arrEmpleado.push(pEmpleado);
    console.log(this.arrEmpleado);

  }
}
