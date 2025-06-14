import { Component } from '@angular/core';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  template: ` <div *ngIf="show" class="toast">{{ message }}</div> `,
  styles: [
    `
      .toast {
        position: fixed;
        top: 20px;
        right: 20px;
        background: #111;
        border: 2px solid #00ff88;
        color: #00ff88;
        padding: 12px 20px;
        border-radius: 8px;
        z-index: 9999;
        box-shadow: 0 0 15px #00ff88;
        animation: fadeInOut 4s ease forwards;
      }

      @keyframes fadeInOut {
        0% {
          opacity: 0;
          transform: translateY(-20px);
        }
        10%,
        90% {
          opacity: 1;
          transform: translateY(0);
        }
        100% {
          opacity: 0;
          transform: translateY(-20px);
        }
      }
    `,
  ],
})
export class ToastComponent {
  message = '';
  show = false;

  constructor(private toastService: ToastService) {
    this.toastService.toast$.subscribe(({ message, show }) => {
      this.message = message;
      this.show = show;
    });
  }
}
