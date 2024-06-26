import { Component, QueryList, ViewChildren } from '@angular/core';
import { IMEAL } from '../interface/IMEAL';
import { MealsComponent } from './meals/meals.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'newTask';
  @ViewChildren(MealsComponent) allMeals!: QueryList<MealsComponent>

  meals: IMEAL[] = [
    {
      name: "Beef",
      image: "https://www.themealdb.com/images/category/beef.png",
      description: "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]"
    },
    {
      name: "Chicken",
      image: "https://www.themealdb.com/images/category/chicken.png",
      description: "Chicken is a type of domesticated fowl, a subspecies of the red junglefowl. It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011.[1] Humans commonly keep chickens as a source of food (consuming both their meat and eggs) and, more rarely, as pets."
    },
    {
      name: "Lamb",
      image: "https://www.themealdb.com/images/category/lamb.png",
      description: "Lamb, hogget, and mutton are the meat of domestic sheep (species Ovis aries) at different ages.\r\n\r\nA sheep in its first year is called a lamb, and its meat is also called lamb. The meat of a juvenile sheep older than one year is hogget; outside the USA this is also a term for the living animal. The meat of an adult sheep is mutton, a term only used for the meat, not the living animals. The term mutton is almost always used to refer to goat meat in the Indian subcontinent.\r\n\r\n"
    },
    {
      name: "Miscellaneous",
      image: "https://www.themealdb.com/images/category/miscellaneous.png",
      description: "General foods that don't fit into another category"
    },
    {
      name: "Dessert",
      image: "https://www.themealdb.com/images/category/dessert.png",
      description: "Dessert is a course that concludes a meal. The course usually consists of sweet foods, such as confections dishes or fruit, and possibly a beverage such as dessert wine or liqueur, however in the United States it may include coffee, cheeses, nuts, or other savory items regarded as a separate course elsewhere. In some parts of the world, such as much of central and western Africa, and most parts of China, there is no tradition of a dessert course to conclude a meal.\r\n\r\nThe term dessert can apply to many confections, such as biscuits, cakes, cookies, custards, gelatins, ice creams, pastries, pies, puddings, and sweet soups, and tarts. Fruit is also commonly found in dessert courses because of its naturally occurring sweetness. Some cultures sweeten foods that are more commonly savory to create desserts."
    },
  ]


  getRandomDescription() {
    const random = Math.floor(Math.random() * this.allMeals.length);
    const randomDescription = this.allMeals.toArray()[random].meal.description;

    return randomDescription;
  }

  displayMealDescription() {
    alert(this.getRandomDescription());
  }
}
