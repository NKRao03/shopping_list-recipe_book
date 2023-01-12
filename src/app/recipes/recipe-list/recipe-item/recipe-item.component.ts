import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipes.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input('recipe') recipe : Recipe;
  @Input('id') id : number;
  // @Output() recipeSelected = new EventEmitter<void>();
  constructor(private recipeService: RecipeService,private route : ActivatedRoute) { }

  ngOnInit(): void {
    // this.recipe = this.recipeService.getRecipe(this.id);
  }
  // onSelect() {
  //   this.recipeSelected.emit();
  // }

  // onRecipeSelected(recipe : Recipe) {
  //   this.recipeservice.recipeSelected.emit(recipe);
  // }
}
