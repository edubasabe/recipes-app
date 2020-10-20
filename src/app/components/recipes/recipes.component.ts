import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styles: [
  ]
})
export class RecipesComponent implements OnInit {
  recipeDetail: Recipe;
  constructor() { }

  ngOnInit(): void {
  }

  showRecipeDetail(event: Recipe) {
    console.log("RecipesComponent -> showRecipeDetail -> event", event);
    this.recipeDetail = event;
  }
}
