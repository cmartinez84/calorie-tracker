import { Component, Input, Output } from '@angular/core';
import { Item }   from './item.model';


@Component({
  selector: 'my-app',
  template: `
  <h1>Root</h1>

  <item-list
  [childItemList]="masterItemList"
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
    public masterItemList: Item[] = [
    new Item("hamburger", 500, "delicious"),
    new Item("Magnum Bar", 600, "oops"),
    new Item("Al pastor Tacos", 400, "yaas")
];
    public clickedItem: Item = null;
    addItemToMasterList(newItem: Item){
        this.masterItemList.push(newItem);
    }
    editItem(clickedItem){
        this.clickedItem = clickedItem;
        console.log("sender works");
    }
    removeItem(itemIndex: number){
        this.masterItemList.splice(itemIndex, 1);
    }
    dontEditting(){
        this.clickedItem = null;
        console.log("done running");
    }
}
