import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
    @Input() recipe?: Recipe;
    thumbsUpStatus: boolean = false;
    thumbsDownStatus: boolean = false;
    username: string|undefined;
    id: number|undefined;
    idString: string|null = null;

  constructor(
    private authService : AuthService,
    private recipeService : RecipeService,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.username = this.authService.getLoggedInUserName();

    this.route.paramMap.subscribe(params => this.idString = params.get("id"));
    this.id = Number.parseInt(this.idString? this.idString : "");
    this.recipeService.getRecipeByID(this.id).subscribe(recipe => {
      this.recipe = recipe;
      if (this.username){
        this.thumbsUpStatus = this.userHasGivenThumbsUp(this.username);
        this.thumbsDownStatus = this.userHasGivenThumbsDown(this.username);
      }
    })

  }

  onThumbsUpClick(){
    if (!this.username){
      return;
    }

    //Remove thumbs up
    if (this.thumbsUpStatus){
      let index: number|undefined = this.recipe?.thumbsUp.indexOf(this.username);
      if (index !== undefined && index !== -1){
        this.recipe?.thumbsUp.splice(index, 1);
        this.thumbsUpStatus = false;
        this.updateRecipe();
        return;
      }
    }

    //Changed mind from thumbs up to thumbs down
    if (this.thumbsDownStatus){
      let index: number|undefined = this.recipe?.thumbsDown.indexOf(this.username);
      if (index !== undefined && index !== -1){
        this.recipe?.thumbsDown.splice(index, 1);
        this.thumbsDownStatus = false;

        this.recipe?.thumbsUp.push(this.username);
        this.thumbsUpStatus = true;
        this.updateRecipe;
        return;
      }
    }

    //Add a thumbs up
    this.recipe?.thumbsUp.push(this.username);
    this.thumbsUpStatus = true;

    //Send the update the API
    this.updateRecipe();
  }

  updateRecipe() : void{
    if (this.recipe){
      this.recipeService.updateRecipe(this.recipe).subscribe();
    }
  }

  onThumbsDownClick(){
    if (!this.username){
      return;
    }

    //Remove thumbs Down by re-clicking
    if (this.thumbsDownStatus){
      let index: number|undefined = this.recipe?.thumbsDown.indexOf(this.username);
      if (index !== undefined && index !== -1){
        console.log(index);
        this.recipe?.thumbsDown.splice(index, 1);
        this.thumbsDownStatus = false;
        this.updateRecipe();
        return;
      }
    }

    //Changed mind from thumbs Up to thumbs Down
    if (this.thumbsUpStatus){
      let index: number|undefined = this.recipe?.thumbsUp.indexOf(this.username);
      if (index !== undefined && index !== -1){
        this.recipe?.thumbsUp.splice(index, 1);
        this.thumbsUpStatus = false;

        this.thumbsDownStatus = true;
        this.recipe?.thumbsDown.push(this.username);
        this.updateRecipe;
        return;
      }
    }

    //Add a thumbs down
    this.recipe?.thumbsDown.push(this.username);
    this.thumbsDownStatus = true;

    //Send the update to the API
    this.updateRecipe();
  }

  userHasGivenThumbsUp(username: string) : boolean{
    if (this.recipe){
      for (let i = 0; i < this.recipe.thumbsUp.length; i++) {
        const element = this.recipe.thumbsUp[i];
        if (element === username){
          return true;
        }
      }
    }
    return false;
  }

  userHasGivenThumbsDown(username: string) : boolean{
    if (this.recipe){
      for (let i = 0; i < this.recipe.thumbsDown.length; i++) {
        const element = this.recipe.thumbsDown[i];
        if (element === username){
          return true;
        }
      }
    }
    return false;
  }
}