import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

export class RecipeService {

  url: string = "http://localhost:8080/keuken/recepten/"
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.url).pipe(
      catchError(this.handleError<any>('getRecipes', [])),
      map(result => result["_embedded"]["recipeList"])
    );
  }

  getRecipeByID(id: number): Observable<Recipe>{
    return this.http.get<Recipe>(this.url + id).pipe(
      catchError(this.handleError<any>('getRecipeByID'))
    );
  }

  addRecipe(recipe: Recipe): Observable<Recipe>{
    return this.http.post<Recipe>(this.url, recipe, this.httpOptions).pipe(
      catchError(this.handleError<Recipe>('addRecipe'))
    );
  }

  updateRecipe(recipe: Recipe): Observable<Recipe>{
    return this.http.put<Recipe>(this.url + recipe.id, recipe, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateRecipe'))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}