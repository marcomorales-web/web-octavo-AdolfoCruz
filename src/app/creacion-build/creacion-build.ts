import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-creacion-build',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './creacion-build.html',
  styleUrls: ['./creacion-build.css'],
  animations: [
    trigger('fadeSlide', [
      transition(':increment', [
        style({ transform: 'translateX(100px)', opacity: 0 }),
        animate('400ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),

      transition(':decrement', [
        style({ transform: 'translateX(-100px)', opacity: 0 }),
        animate('400ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
    ]),
  ],
})
export class CreacionBuild {
  currentStep = 1;

  nextStep() {
    if (this.currentStep < 4) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
}
