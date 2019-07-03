import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'xyz'
})
export class XyzPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
