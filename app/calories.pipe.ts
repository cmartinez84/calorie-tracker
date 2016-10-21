import {Pipe, PipeTransform} from '@angular/core';
import {Item} from './item.model';

@Pipe({
  name: "calories",
  pure: false
})

  export class CaloriesPipe implements PipeTransform {
    transform(input: Item[], calorieSortType: string) {
        var output: Item[] = [];
        if(calorieSortType ==="Ascending"){
            output = input.sort(function(a,b){
                return a.calories-b.calories;
            });
            return output;
        }
        else if(calorieSortType ==="Descending"){
            output = input.sort(function(a,b){
                return b.calories-a.calories;
            });
            return output;
        }
        else{
            return input;
        }
    }
  }
