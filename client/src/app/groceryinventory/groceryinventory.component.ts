import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {IItem } from '../Models/Item';
import { StoreDirective } from '../store.directive';

@Component({
  selector: 'app-groceryinventory',
  templateUrl: './groceryinventory.component.html',
  styleUrls: ['./groceryinventory.component.css']
})
export class GroceryinventoryComponent implements OnInit {
  items: IItem[] = [];
  @ViewChild('form') form:ElementRef;
  constructor(public store:StoreDirective) { }

  ngOnInit() {
  }

  add(formEl: HTMLFormElement) {
    if(!formEl.item.value || !formEl.price.value || !formEl.quantity.value) return;
    let itemObj = {
      name: formEl.item.value,
      price:formEl.price.value,
      quantity: formEl.quantity.value
    };
   this.items.push(itemObj);
   this.store.updateState(this.items);
   this.form.nativeElement.item.value = this.form.nativeElement.price.value = this.form.nativeElement.quantity.value = ''
  }

  deleteItem(index:number) {
    this.items.splice(index,1);
    this.store.updateState(this.items);

  }
 
}
