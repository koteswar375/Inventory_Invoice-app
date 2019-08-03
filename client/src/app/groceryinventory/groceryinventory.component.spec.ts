import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryinventoryComponent } from './groceryinventory.component';

describe('GroceryinventoryComponent', () => {
  let component: GroceryinventoryComponent;
  let fixture: ComponentFixture<GroceryinventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceryinventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryinventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
