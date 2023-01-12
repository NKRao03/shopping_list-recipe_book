import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id : number ; 
  recipeEdit : boolean = false;
  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
    (params: Params) => {
      this.id = +params['id'];
      this.recipeEdit = params['id'] != null;
      console.log(this.recipeEdit)
    }
    )
  }

}
