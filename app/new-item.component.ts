import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from './item.model';

@Component({
  selector: 'new-item',
  template: `
  <div class="">
      <h1>Here is a new Item component</h1>
      <form>
          <label>Item:</label>
          <input type="text" #newName placeholder="carrot">
          <label>Calories:</label>
          <input type="number" #newCalories placeholder="123">
          <label>Details:</label>
          <input type="text" #newDetails placeholder="steamed">
          <button type="button" (click)="addItem(newName.value, newCalories.value, newDetails.value)">Submit</button>
      </form>
  </div>
  `
})

  export class NewItemComponent {
    @Output() newItemSender = new EventEmitter();
    addItem(name, calories, details){
        var newItem: Item = new Item(name, calories, details);
        this.newItemSender.emit(newItem);
    }
  }
