import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelcase'
})
export class CamelcasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const values = value.split(' ');
    let result = '';

    for (const valueString of values) {
      result += valueString.substring(0, 1).toUpperCase() + valueString.substring(1) + ' ';
    }

    return result;
  }

}
