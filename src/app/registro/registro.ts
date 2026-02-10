import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-registro',
  imports: [RouterModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
    animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(30px)'
        }),
        animate('600ms ease-out', style({
          opacity: 1,
          transform: 'translateY(0)'
        }))
      ])
    ])
  ]
})
export class Registro {

}
