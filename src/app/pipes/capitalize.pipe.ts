import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: any, args?: any): any {
   /*  if (typeof value === 'string') {
      const palabras = value.split('');
      const arratem = [];
      for (const palabra of palabras) {
        arratem.push(palabra[0].toUpperCase() + palabra.slice(1).toLowerCase());
      }
      return arratem.join(' ');
    } */
    if (typeof value === 'string') {
     return value
      .split(' ')
      .map(palabra => palabra[0].toUpperCase() + palabra.slice(1).toLowerCase())
      .join(' ');
    }
  }

}
