import { Empleado } from './../../../models/empleado';
import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-lista-empleado',
  templateUrl: './lista-empleado.component.html',
  styleUrls: ['./lista-empleado.component.css']
})
export class ListaEmpleadoComponent implements OnInit {
   empleados: Empleado[];

  constructor(
    private empleadosService: EmpleadoService
    ) { }

  ngOnInit() {
    this.empleadosService.getAll()
    .then(arrEmpleados => {
      this.empleados = arrEmpleados;
    }).catch(error => {
      console.log('este es el error');
    });
  }

}
