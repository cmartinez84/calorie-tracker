import { Component, Input, Output } from '@angular/core';
import { Item }   from './item.model';


@Component({
  selector: 'my-app',
  template: `
  <h1>Root</h1>

  <item-list
  [childItemList]="masterItemList"></item-list>
  <new-item
  (newItemSender)="addItemToMasterList($event)"
  ></new-item>
  `
})

export class AppComponent {
    public masterItemList: Item[] = [
    new Item("hamburger", 500, "delicious"),
    new Item("Magnum Bar", 600, "oops"),
    new Item("Al pasto Tacos", 400, "yaas")
];
    addItemToMasterList(newItem: Item){
        this.masterItemList.push(newItem);
    }
}
