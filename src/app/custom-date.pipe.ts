import { Pipe, PipeTransform } from '@angular/core';
import { Moment } from 'moment';
import myMoment from 'moment';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {
  public transform(
    date: Moment | Date | string | number,
    format: string = 'DD-MM-YYYY HH:mm'
  ): string {
    return myMoment(date).format(format);
  }
}
