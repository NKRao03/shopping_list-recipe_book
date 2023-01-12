import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";
export class ShoppingListService {
    ingredientsArray = new EventEmitter<Ingredient[]>;
    ingredients : Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Tomatoes',10)
  ];

  getIngredients(){
    return this.ingredients.slice();
    
  }

  onIngredientAdded(ingredient : Ingredient) {
    console.log(ingredient)
    this.ingredients.push(ingredient)
    this.ingredientsArray.emit(this.ingredients.slice());
  }
  
  addIngredients(ingredient: Ingredient[]){
    this.ingredients.push(...ingredient);
    this.ingredientsArray.emit(this.ingredients.slice());
  }
}