import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastSubject = new BehaviorSubject<{
    message: string;
    show: boolean;
  }>({ message: '', show: false });
  toast$ = this.toastSubject.asObservable();

  show(message: string, duration: number = 3000) {
    this.toastSubject.next({ message, show: true });

    setTimeout(() => {
      this.toastSubject.next({ message: '', show: false });
    }, duration);
  }
}
