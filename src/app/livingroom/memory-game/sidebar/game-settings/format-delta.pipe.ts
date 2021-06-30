import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {

  transform(value: number, addPlusSign: boolean = false): string {
    value = Math.round(value * 100) / 100; // Round to two decimals
    let stringValue = value.toString();
    if (addPlusSign && value >= 0) {
      stringValue = '+' + value;
    }

    return stringValue;
  }

}
