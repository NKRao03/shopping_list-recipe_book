import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredients.model";
export class ShoppingListService {
    ingredientsArray = new Subject<Ingredient[]>;
    ingredientEdit = new Subject<number>;
    ingredients : Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Tomatoes',10)
  ];

  getIngredient(index : number) {
    return this.ingredients[index];
  }

  deleteIngredient(index : number) {
    this.ingredients.splice(index,1);
    this.ingredientsArray.next(this.ingredients);
  }

  getIngredients(){
    return this.ingredients.slice();
    
  }

  onIngredientAdded(ingredient : Ingredient) {
    console.log(ingredient)
    this.ingredients.push(ingredient)
    this.ingredientsArray.next(this.ingredients.slice());
  }
  
  addIngredients(ingredient: Ingredient[]){
    this.ingredients.push(...ingredient);
    this.ingredientsArray.next(this.ingredients.slice());
  }

  editIngredient(index : number , ingredient : Ingredient) {
    this.ingredients[index] = ingredient;
    this.ingredientsArray.next(this.ingredients.slice());
  }
}