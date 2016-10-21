import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { ItemListComponent }   from './item-list.component';
import { NewItemComponent } from './new-item.component';



@NgModule({
  imports: [BrowserModule],
  declarations: [ AppComponent, ItemListComponent, NewItemComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
