import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateWeek'
})
export class DateWeekPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
