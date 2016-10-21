import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item }   from './item.model';

@Component({
  selector: 'item-list',
  template: `
  <h1>My First Angular 2 App</h1>
  <label>Sort My Calories</label>
  <select (change)="sortByCalories($event.target.value)">
  <option selected="selected">Show All</option>
  <option>Ascending</option>
  <option>Descending</option>
  </select>
  <div *ngFor="let item of childItemList | calories: calorieSortType">
      <p><span>Name: {{item.name}} </span></p>
      <p><span>Calories: {{item.calories}}</span></p>
      <p><span>Details: {{item.details}}</span></p>
      <button (click)="editItemClicked(item)">Edit Item</button>
  </div>
  `
})

export class ItemListComponent {
    @Input() childItemList: Item[];
    @Output() editItemSender = new EventEmitter();
    public calorieSortType: string = "show all";
    editItemClicked(clickedItem: Item){
        this.editItemSender.emit(clickedItem);
        console.log(clickedItem);
    }
    sortByCalories(option:string ){
        this.calorieSortType = option;
    }

}
