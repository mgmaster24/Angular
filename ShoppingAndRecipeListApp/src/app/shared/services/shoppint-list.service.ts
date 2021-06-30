import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient.model';

@Injectable({ providedIn: 'root' })
export class ShoppingListService implements OnInit {
  private ingredientArray: Ingredient[] = [
    new Ingredient('Apples', 10),
    new Ingredient('Tomatoes', 5),
  ];

  ingredientsChanged = new EventEmitter<Ingredient[]>();
  constructor() {}

  ngOnInit(): void {}

  get ingredients(): Ingredient[] {
    return this.ingredientArray.slice();
  }

  addIngredient(ingredient: Ingredient) {
    if (!this.updateIngredient(ingredient)) {
      this.ingredientArray.push(ingredient);
    }
    this.ingredientsChanged.emit(this.ingredients);
  }

  addIngredients(ingredients: Ingredient[]) {
    ingredients.forEach((ingredient: Ingredient) => {
      if (!this.updateIngredient(ingredient)) {
        this.ingredientArray.push(ingredient);
      }
    });
    this.ingredientsChanged.emit(this.ingredients);
  }

  deleteIngredient(ingredient: Ingredient) {
    const index: number = this.ingredientArray.findIndex(
      (ing) => ing.name === ingredient.name
    );
    if (index > -1) {
      this.ingredientArray.splice(index, 0);
    }
  }

  deleteIngredients(ingredients: Ingredient[]) {
    for (let i = ingredients.length; i > 0; i--) {
      this.deleteIngredient(ingredients[i]);
    }
  }

  private updateIngredient(ingredient: Ingredient): boolean {
    const found: Ingredient = this.ingredientArray.find(
      (ing) => ing.name === ingredient.name
    );
    if (!found) {
      return false;
    }

    found.amount += ingredient.amount;
    return true;
  }
}
