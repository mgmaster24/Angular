import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shared/services/shoppint-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  selectedIngredient: Ingredient;
  ingredients: Ingredient[];
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.ingredients;
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  onIngredientDeleted() {
    const index = this.ingredients.indexOf(this.selectedIngredient);
    if (index > -1) {
      this.ingredients.splice(index, 1);
    }

    console.log('Not Found');
  }

  onIngredientSelected(ingredient: Ingredient) {
    this.selectedIngredient = ingredient;
    console.log(this.selectedIngredient);
  }
}
