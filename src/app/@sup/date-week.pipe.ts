import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'dateWeek',
	standalone: false
})
export class DateWeekPipe implements PipeTransform {

	transform(value: unknown, ...args: unknown[]): unknown {
		return null;
	}

}
