import { PostPipeService } from './../../services/post-pipe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  // currencyPipe
  precio: number;

  // decimalPipe
  numero: number;

  // DatePipe
  fecha: Date;

  // PercentPipe
  numAleatorio: number;

  // JsonPipe
  estudiante: any;

  // lower, upper, title
  texto: string;

  // slicePipe
  animales: string[];
  minimo: number;
  maximo: number;

  // AsynPipe
  prom: Promise<string>;
  promPost: Promise<any[]>;

  constructor( private posService: PostPipeService) {
    this.precio = 198.87;
    this.numero = 3.4567890;
    this.fecha =  new Date();
    this.numAleatorio = Math.random();
    this.estudiante = {
      nombre: 'Roberto',
      apellido: 'castro',
      notas: [3, 5, 6, 9]
    };
    this.texto = 'texto dela mancha';
    this.animales = ['perro', 'gato', 'lora', 'pajaro'];
    this.minimo = 0;
    this.maximo = this.animales.length;
    this.prom = new Promise((resolve, reject) => {
     setTimeout(() => resolve(' se resuelve la promesa en 4 segundos'), 4000);
    });
    this.promPost = this.posService.getAll();

   }

  ngOnInit() {
    setInterval(() => this.fecha = new Date(), 1000);
  }





}
