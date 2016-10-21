import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from './item.model';

@Component({
  selector: 'edit-item',
  template: `
 <h1>Edit Connected</h1>
 <div *ngIf="childClickedItem" class="">
     <form>
     <label>Name:</label>
     <input type="text" name="name" [(ngModel)]="childClickedItem.name">
     <label>Calories:</label>
     <input type="number" name="calories"[(ngModel)]="childClickedItem.calories">
     <label>Details:</label>
     <input type="text" name="details"[(ngModel)]="childClickedItem.details">
         <button type="button" (click)="doneClicked()">Done</button>
     </form>
 </div>
`
})

export class EditItemComponent {
    @Input() childClickedItem: Item;
    @Output() doneClickSender = new EventEmitter();
    doneClicked(){
        this.doneClickSender.emit();
    }
}
