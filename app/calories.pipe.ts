import {Pipe, PipeTransform} from '@angular/core';
import {Item} from './item.model';

@Pipe({
  name: "calories",
  pure: false
})

  export class CaloriesPipe implements PipeTransform {
    transform(input: Item[], calorieSortType: string) {
        var output: Item[] = [];
        return input;
      }
    }
