import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static:false}) nameInputRef:ElementRef;
  @ViewChild('quantityInput', {static:false}) quantitiyInputRef:ElementRef;

  constructor(private slService : ShoppingListService){}

  onSelection() {
    this.slService.onIngredientAdded(new Ingredient(this.nameInputRef.nativeElement.value, this.quantitiyInputRef.nativeElement.value));
  }

  ngOnInit(): void {
  }

}
