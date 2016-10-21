import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item }   from './item.model';

@Component({
  selector: 'item-list',
  template: `
  <h1>My First Angular 2 App</h1>
  <div *ngFor="let item of childItemList | calories:CaloriesSort">
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
    editItemClicked(clickedItem: Item){
        this.editItemSender.emit(clickedItem);
        console.log(clickedItem);
    }
}
