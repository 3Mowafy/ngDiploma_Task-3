import { Component, Input } from '@angular/core';
import { IMEAL } from '../../interface/IMEAL';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.scss'
})
export class MealsComponent {
  @Input() meal!: IMEAL;

  displayMealDescription() {
    alert(this.meal.description)
  }
}
