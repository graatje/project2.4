import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent {
    title = 'Recept indienen';

    recipeFormGroup = new FormGroup({
        naam: new FormControl(null, Validators.required),
        bereidingstijd: new FormControl(null, Validators.required),
        personen: new FormControl(null, Validators.required),
        bereidingswijze: new FormControl(null, Validators.required),
        ingredienten: new FormControl(null, Validators.required),
    });

  constructor(
    private recipeService: RecipeService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    //TODO: validate form
    if (this.recipeFormGroup.invalid){
      alert("Vul alle velden in A.U.B. !");
      return;
    }

    let newRecipe: Recipe = {
      id: 0,
      naam: this.recipeFormGroup.get('naam')?.value,
      bereidingstijd: this.recipeFormGroup.get('bereidingstijd')?.value,
      aantalPersonen: this.recipeFormGroup.get('personen')?.value,
      bereidingswijze: this.recipeFormGroup.get('bereidingswijze')?.value,
      ingredienten: this.recipeFormGroup.get('ingredienten')?.value,
      thumbsDown: [],
      thumbsUp: []
    }

    this.recipeService.addRecipe(newRecipe).subscribe(recipe =>{
      this.router.navigate(['/keuken/recepten'])
    })

  }


}
