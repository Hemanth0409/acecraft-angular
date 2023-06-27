import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itemsCount'
})
export class ItemsCountPipe implements PipeTransform {

  transform(value: number) {
    return Math.max(value);
  }

}
