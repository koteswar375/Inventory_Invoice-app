import { Component, OnInit } from '@angular/core';
import { StoreDirective } from '../store.directive';
import { IItem } from '../Models/Item';

@Component({
  selector: 'app-grocerystore',
  templateUrl: './grocerystore.component.html',
  styleUrls: ['./grocerystore.component.css']
})
export class GrocerystoreComponent implements OnInit {
  items: IItem[] = [];
  constructor(public store: StoreDirective) { }

  ngOnInit() {
    this.store.eventStream$.subscribe((items) => {
      this.items = items
    })
  }

}
