import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
    title = 'Receptenboek';
    recipes:Recipe[] = [];
    selectedRecipe?: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
      this.getRecipes();
  }

  onSelect(recipe:Recipe): void {
      this.selectedRecipe = recipe;
  }

  getHeroes(): void {
    this.recipeService.getRecipes().subscribe(recipes => this.recipes = this.recipes);
  }
}