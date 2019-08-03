import { Directive } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { IItem } from './Models/Item';

@Directive({
  selector: '[appStore]'
})
export class StoreDirective {
  private _subject:Subject<IItem[]> = new Subject( );
  eventStream$:Observable<IItem[]> = this._subject.asObservable();
  constructor() { }

  updateState(items) {
    this._subject.next(items);
  }

  
  
}
