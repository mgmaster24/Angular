import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';
import { Ingredient } from '../ingredient.model';

@Injectable({ providedIn: 'root' })
export class RecipeService implements OnInit {
  private recipeArray: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is a test',
      // tslint:disable-next-line: max-line-length
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872',
      [new Ingredient('Apples', 2), new Ingredient('Flour', 1)]
    ),
    new Recipe(
      'A test recipe 2',
      'This is a test 2',
      // tslint:disable-next-line: max-line-length
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872',
      [new Ingredient('Peaches', 2), new Ingredient('Vanilla Icecream', 1)]
    ),
  ];

  recipeSelected = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit(): void {}

  get recipes(): Recipe[] {
    return this.recipeArray.slice();
  }

  getRecipe(index: number): Recipe {
    return this.recipeArray[index];
  }

  addRecipe(
    name: string,
    description: string,
    imgPath: string,
    ingredients: Ingredient[]
  ): void {
    this.recipes.push(new Recipe(name, description, imgPath, ingredients));
  }

  addIngredient(recipe: Recipe, ingredient: Ingredient) {
    recipe.ingredients.push(ingredient);
  }

  updateRecipe(): void {}

  removeRecipeAtIndex(index: number): void {
    this.recipeArray.splice(index, 1);
  }
}
