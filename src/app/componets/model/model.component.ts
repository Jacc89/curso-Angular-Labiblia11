import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({

      nombre: new  FormControl('', [Validators.required, Validators.minLength(3)]),
      apellidos: new FormControl('', [Validators.required, Validators.maxLength(12)]),
      edad: new FormControl('', [this.edadValidator]),
      dni: new FormControl('', [this.dniValidator]),
      direccion: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl(''),
      repite_password: new FormControl(''),

    });

  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.formulario.value);
  }

  edadValidator(FormControl) {
    const value = FormControl.value;
    const max = 65;
    const min = 18;
    if ( value >= 18 && value <= 65 ) {
       return null;
     } else {
       return {edadValidator: {max, min}
     };
    }
  }

  
  dniValidator( FormControl ) {
    const value = FormControl.value;
    const letras = 'TQWERTYUIOPÁSDFGHJKLÑZXCVBNM';

    if (/^\d{8}[a-zA-Z]$/.test(value)) {
      const numero = value.substr(0, value.length - 1);
      const letra = value.charAt(value.length - 1 );
      const calculo = numero / 23;
      const letraSelecionada = letras.charAt(calculo);
      // tslint:disable-next-line:curly
      if (letra.ToUpperCase() === letraSelecionada) {
        return null;

      } else {
        return{ dniValidator: 'letras no coinciden con el numero' };
      }
    } else {
      return{ dniValidator: 'el dni no tiene buen formato'};
    }

  }
}
