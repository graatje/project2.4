import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent {
    title = 'Recept indienen';

    recipeFormGroup = new FormGroup({
        naam: new FormControl(''),
        bereidingstijd: new FormControl(''),
        personen: new FormControl(''),
        pittig: new FormControl(''),
        bereidingwijze: new FormControl(''),
    });
    
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    
  }

}
