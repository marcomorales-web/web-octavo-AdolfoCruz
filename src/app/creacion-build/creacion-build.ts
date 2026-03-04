import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-creacion-build',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './creacion-build.html',
  styleUrls: ['./creacion-build.css'],
  animations: [
    trigger('fadeSlide', [
      transition('* => next', [
        style({ transform: 'translateX(100px)', opacity: 0 }),
        animate('400ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),

      transition('* => prev', [
        style({ transform: 'translateX(-100px)', opacity: 0 }),
        animate('400ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
    ]),
  ],
})
export class CreacionBuild {
  currentStep = 1;
  animationDirection: 'next' | 'prev' = 'next';

  nextStep() {
    if (this.currentStep < 4) {
      this.animationDirection = 'next';
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.animationDirection = 'prev';
      this.currentStep--;
    }
  }
}
