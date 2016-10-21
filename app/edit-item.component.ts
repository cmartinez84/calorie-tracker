import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from './item.model';

@Component({
  selector: 'edit-item',
  template: `
 <h1>Edit Connected</h1>
 <div *ngIf="childClickedItem" class="">
     <form>
     <input type="text" name="name" [(ngModel)]="childClickedItem.name">
     <input type="text" name="calories"[(ngModel)]="childClickedItem.calories">
     <input type="text" name="details"[(ngModel)]="childClickedItem.details">
         <button type="button" (click)="doneClicked()">Done</button>
     </form>
 </div>
`
})

export class EditItemComponent {
    @Input() childClickedItem: Item;
    @Output() doneClickedSender = new EventEmitter();
    doneClicked(){
        this.doneClickedSender.emit();
    }
}
