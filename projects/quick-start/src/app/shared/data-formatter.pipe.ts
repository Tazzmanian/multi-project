import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataFormatter'
})
export class DataFormatterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
