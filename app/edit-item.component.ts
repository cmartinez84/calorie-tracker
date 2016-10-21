import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from './item.model';

@Component({
  selector: 'edit-item',
  template: `
 <h1>Edit Connected</h1>
 <div *ngIf="childClickedItem" class="">
     <form>
     <input type="text" [(ngModel)]="childClickedItem.name">
     <input type="text" [(ngModel)]="childClickedItem.calories">
     <input type="text" [(ngModel)]="childClickedItem.details">
         <button type="button" (click)="doneClickedSender()">Done</button>
     </form>
 </div>
`
})

export class EditItemComponent {
    @Input() childClickedItem: Item;
}
