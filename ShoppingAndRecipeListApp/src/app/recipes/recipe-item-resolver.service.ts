import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { RecipeService } from 'src/app/shared/services/recipe.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeItemResolver implements Resolve<Recipe> {
  constructor(private recipeService: RecipeService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Recipe | Observable<Recipe> | Promise<Recipe> {
    console.log('Route Params:' + +route.params['id']);
    return this.recipeService.getRecipe(+route.params['id']);
  }
}
/*  */
