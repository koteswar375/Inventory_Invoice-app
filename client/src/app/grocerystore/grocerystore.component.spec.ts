import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrocerystoreComponent } from './grocerystore.component';

describe('GrocerystoreComponent', () => {
  let component: GrocerystoreComponent;
  let fixture: ComponentFixture<GrocerystoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrocerystoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrocerystoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
