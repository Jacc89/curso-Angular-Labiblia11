import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverso'
})
export class ReversoPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    /* const arrValue = value.split('');
    const arrReverso = arrValue.reverse();
    return arrReverso.join(''); */

    return value.split('').reverse().join('');
  }

}
