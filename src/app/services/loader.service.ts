import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loadingSubject = new BehaviorSubject<boolean>(false)
  constructor() { }

  showLoading() {
    this.loadingSubject.next(true);
  }
  hideLoading() {
    this.loadingSubject.next(false);
  }
  get isLoadingValue() {
    return this.loadingSubject.value;
  }
  get isLoading() {
    return this.loadingSubject.asObservable();
  }
}
