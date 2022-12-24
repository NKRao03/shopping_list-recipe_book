import { Component, Input } from '@angular/core';
import { Ingredient } from './shared/ingredients.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping_list-recipe_book';
  loadedFeature = 'recipe';
  
  onNavigate(feature: any){
    this.loadedFeature = feature;
  }
}
