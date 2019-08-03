import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { GroceryinventoryComponent } from './groceryinventory/groceryinventory.component';
import { GrocerystoreComponent } from './grocerystore/grocerystore.component';
import {FormsModule} from '@angular/forms';
import { StoreDirective } from './store.directive';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    GroceryinventoryComponent,
    GrocerystoreComponent,
    StoreDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
