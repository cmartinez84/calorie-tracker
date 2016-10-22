import { Component, Input, Output } from '@angular/core';
import { Item }   from './item.model';
import { Meal }   from './meal.model';



@Component({
  selector: 'my-app',
  template: `
  <h1>Root</h1>

  <item-list
  [childItemList]="newMeal.mealItems"
  (editItemSender)="editItem($event)"
  (removeItemSender)="removeItem($event)"
  ></item-list>
  <edit-item
  [childClickedItem]="clickedItem"
  (doneClickSender)="dontEditting($event)"
  >
  ></edit-item>
  <new-item
  (newItemSender)="addItemToMasterList($event)"
  ></new-item>
  `
})

export class AppComponent {
    public newMeal:Meal = new Meal();

    public clickedItem: Item = null

    addItemToMasterList(newItem: Item){
        this.newMeal.mealItems.push(newItem);
    }
    editItem(clickedItem){
        this.clickedItem = clickedItem;
        console.log("sender works");
    }
    removeItem(itemIndex: number){
        this.newMeal.mealItems.splice(itemIndex, 1);
    }
    dontEditting(){
        this.clickedItem = null;
        console.log("done running");
    }
}
