import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { RECIPES } from './mock-recipes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {

  constructor() { }

  getRecipes(): Observable<Recipe[]> {
    const recipes = of(RECIPES);
    return recipes;
  }
}