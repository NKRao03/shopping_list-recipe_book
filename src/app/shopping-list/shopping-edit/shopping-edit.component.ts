import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription : Subscription;
  editMode : boolean = false;
  editItemIndex : number;
  @ViewChild('f' , {static:false}) slForm : NgForm;
  constructor(private slService : ShoppingListService){}
  editedItem : Ingredient;
  onSelection(f : NgForm) {
    if (this.editMode) {
      this.slService.editIngredient(this.editItemIndex, new Ingredient(f.value.name, f.value.amount))
    }
    else
    this.slService.onIngredientAdded(new Ingredient(f.value.name, f.value.amount));

    this.editMode = false;
    this.slForm.reset();
  }

  ngOnInit(): void {
    this.subscription = this.slService.ingredientEdit.subscribe(
      (index : number) => {
        this.editItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slService.getIngredient(index);
        this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      }); 
      }
    )
  }

  onDelete() {
    this.slService.deleteIngredient(this.editItemIndex);
    this.slForm.reset();
    this.editMode = false;
  } 
  
  onClear() {
    this.slForm.reset();
    this.editMode = false;                                                                           
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

}
