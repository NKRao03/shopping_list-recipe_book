import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";
import { Recipe } from "./recipe.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
@Injectable()
export class RecipeService {
    constructor(private slService : ShoppingListService) {}
    recipeSelected = new EventEmitter<Recipe>;
    recipes : Recipe[] =[ 
    new Recipe(
    'Sample Recipe',
    'This is a sample recipe', 
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjaG2cfLMIULCNfKLV82l_8K1f7iX_Go-85M_5eCTDxvExQpgNl4s7UWq4YMrsJmI3SURRuGhV7Luu9uHFB53QAu2WnW9E-FN0ollJHgNMMBEjJz2FGuzfFQfBKV5LFWzPztxjgSM9DtPpKrr-qrPlMQJrGwkvEcMxEXeUZSLMBW3_WIR73p-UO4gU30Q/s1280/cheese-garlic-bread-min.jpg'
    ,[
        new Ingredient('Beans', 5),
        new Ingredient('Bread',2)
    ]
    ),  
    new Recipe(
    'Sample Recipe 2',
    'This is a sample recipe', 
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjaG2cfLMIULCNfKLV82l_8K1f7iX_Go-85M_5eCTDxvExQpgNl4s7UWq4YMrsJmI3SURRuGhV7Luu9uHFB53QAu2WnW9E-FN0ollJHgNMMBEjJz2FGuzfFQfBKV5LFWzPztxjgSM9DtPpKrr-qrPlMQJrGwkvEcMxEXeUZSLMBW3_WIR73p-UO4gU30Q/s1280/cheese-garlic-bread-min.jpg'
    ,[
        new Ingredient('Beans', 7),
        new Ingredient('Bread',3)
    ]
    )  
];

    getRecipes(){
        this.recipes.slice
    }

    getRecipe(id:number){
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredient : Ingredient[]) {
        this.slService.addIngredients(ingredient); 
    }
}