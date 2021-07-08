import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('cambiaColor', [
      state('rojo', style({
        'background-color': 'red'
      })),     
      state('amarillo',style({
        'background-color': 'yellow'
      })),
      state('verde',style({
        'background-color': 'green'
      })),
      transition('rojo =>amarillo', animate(500)),
      transition('amarillo =>verde', animate(1000)),
      transition('verde => rojo', animate("5s ease-in")),
      /* transition('void =>*', [
        style({ 'transform' : 'translateX(-100%)'}),
        animate(1000)
      ]) */
      transition('void => *', [
        animate(500, keyframes([
          style({ opacity: 0, transform: 'translateX(-100%', offset: 0}),
          style({ opacity: 1, transform: 'translateX(200px)', offset: 0.7}),
          style({ opacity: 1, transform: 'translateX(0)', offset: 1})
        ]))
      ])
    ])
  ]
})
export class AnimationComponent implements OnInit {

  color: string;

  constructor() {
    this.color = 'verde';
   }

  ngOnInit() {
    setInterval(() => {
      if(this.color === 'rojo'){
        this.color = 'amarillo';
      }else if(this.color === 'amarillo'){
        this.color =' verde'
      }else if(this.color === 'verde'){
        this.color = 'rojo';
      }
    }, 2000);
  }



}
