import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipes.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit, OnDestroy {
  selectedRecipe: Recipe;
  constructor(private recipeService : RecipeService) { 

   }
   i : Subscription;
  ngOnInit(): void {
    this.i=this.recipeService.recipeSelected.subscribe(
      (recipe : Recipe) => {
        this.selectedRecipe = recipe; 
      }
    );
  }
  ngOnDestroy(){
    this.i.unsubscribe();
  }
}
