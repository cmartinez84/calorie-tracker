import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item }   from './item.model';
import { Meal }   from './meal.model';


@Component({
  selector: 'item-list',
  template: `
  <h1>yo {{allCalories()}}</h1>
  <label>Sort Foods By Calories</label>
  <select (change)="sortByCalories($event.target.value)">
  <option selected="selected">Show All</option>
  <option>Ascending</option>
  <option>Descending</option>
  <option>over 500 kcal</option>
  <option>under 500 kcal</option>

  </select>
  <div *ngFor="let item of childItemList | calories: calorieSortType; let i=index">
      <p><span>Name: {{item.name}} </span></p>
      <p><span>Calories per Portion: {{item.calories}}</span></p>
      <p><span>Details: {{item.details}}</span></p>
      <p><span>Quantity: {{item.quantity}}</span></p>
      <p><span>Total Calories: {{item.getItemCalories()}}</span></p>

      <input type="hidden" value="{{i}}">
      <button (click)="editItemClicked(item)">Edit Item</button>
      <button (click)="removeItemClicked(i)">Remove Item</button>
  </div>
  `
})

export class ItemListComponent {
    @Input() childItemList: Item[];
    @Output() editItemSender = new EventEmitter();
    @Output() removeItemSender = new EventEmitter();
    public calorieSortType: string = "show all";
    editItemClicked(clickedItem: Item){
        this.editItemSender.emit(clickedItem);
        console.log(clickedItem);
    }
    removeItemClicked(i: number){
        this.removeItemSender.emit(i);
    }
    sortByCalories(option:string ){
        this.calorieSortType = option;
    }
    allCalories(){
        var output = 0;
        this.childItemList.forEach(function(item){
            output += item.getItemCalories();
        });
        return output;
    }

}
