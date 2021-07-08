import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numarray'
})
export class NumarrayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if ( typeof value === 'number'){
      const newLocal = Array(value).keys();
      return [ newLocal ]

    }
  }

}
