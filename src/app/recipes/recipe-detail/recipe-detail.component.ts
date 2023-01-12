import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';
import {ActivatedRoute,Params, Router} from '@angular/router'
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // @Input() recipeDetail: Recipe;
  recipeDetail: Recipe;
  id: number;
  constructor(private recipeService : RecipeService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipeDetail = this.recipeService.getRecipe(this.id);
      }
    )
    
  }
  addItems() {
    this.recipeService.addIngredientsToShoppingList(this.recipeDetail.ingredients);
  }

  navigateToEdit(){
    this.router.navigate(['edit'], {relativeTo: this.route})
  }
}
