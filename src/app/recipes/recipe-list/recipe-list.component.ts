import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] =[];
  constructor(private recipeservice: RecipeService , private router: Router, private route : ActivatedRoute) { 
    
  }

  
  ngOnInit(): void {
    this.recipes=this.recipeservice.recipes;
  }

  onNew() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }

}
