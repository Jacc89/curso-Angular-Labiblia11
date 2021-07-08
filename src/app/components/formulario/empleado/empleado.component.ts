import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  formNewEmpleado: FormGroup;

  constructor(
    private empleadoService: EmpleadoService) {
    this.formNewEmpleado = new FormGroup({
      nombre: new  FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      edad: new FormControl(''),
      departamento: new FormControl(''),
      password: new FormControl(''),
      imagen: new FormControl(''),
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.formNewEmpleado.value);
    this.empleadoService.insert(this.formNewEmpleado.value);
  }


}
