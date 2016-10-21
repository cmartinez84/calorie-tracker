import { Component } from '@angular/core';
import { Item }   from './item.model';


@Component({
  selector: 'my-app',
  template: `
  <h1>My First Angular 2 App</h1>
  well this loads
  <div *ngFor="let item of masterItemList"class="">
      <p><span>Name: {{item.name}} </span></p>
      <p><span>Calories: {{item.calories}}</span></p>
      <p><span>Details: {{item.details}}</span></p>
  </div>

  `
})

export class AppComponent {
    public masterItemList: Item[] = [
    new Item("hamburger", 500, "delicious"),
    new Item("Magnum Bar", 600, "oops"),
    new Item("Al pasto Tacos", 400, "yaas")
    ]
}
