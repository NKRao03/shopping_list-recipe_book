import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static:false}) nameInputRef:ElementRef;
  @ViewChild('quantityInput', {static:false}) quantitiyInputRef:ElementRef;

  @Output() sendDetails = new EventEmitter<Ingredient>();

  onSelection() {
    this.sendDetails.emit(new Ingredient(this.nameInputRef.nativeElement.value, this.quantitiyInputRef.nativeElement.value));
  }

  constructor() { }

  ngOnInit(): void {
  }

}
