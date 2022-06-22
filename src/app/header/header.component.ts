import { Component, OnInit } from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [NgbDropdownConfig]
})
export class HeaderComponent implements OnInit {

  hotFoods: Array<any> = [
    "Hot & Spicy Francheesie",
    "Chorizo Potato & Green Chile Omelet",
    "Spicy Southwest Bean & Corn Salad",
    "Spicy Jalapeño & Bacon Flatbread",
    "Spicy Grilled Salmon Kabobs",
    "Chicken Paprikash Recipe",
    "Spicy Chicken Lasagna Roll-Ups",
  ];
  snackFoods: Array<any> = [
    "Pretzels",
    "Salted peanuts",
    "Potato chips",
    "Popcorn",
    "Trail mix",
    "Indian Namkeen mixture",
    "Choco Bar",
  ];
  Coffee: Array<any> = [
    "Cafe Latte",
    "Cafe Mocha",
    "Americano",
    "Flat White",
    "Lungo",
    "Macchiato",
    "Affogato",
  ];
  iceCream: Array<any> = [
    "Gelato",
    "Kulfi",
    "Sherbet",
    "Sorbet",
    "Frozen Yogurt",
    "Soft Serve",
    "Philadelphia Ice Cream",
  ];
  constructor(config: NgbDropdownConfig) {
    // customize default values of dropdowns used by this component tree
    config.placement = 'top-start';
    config.autoClose = false;
  }

  ngOnInit(): void {
  }


}
