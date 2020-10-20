import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: [
  ]
})
export class RecipeListComponent implements OnInit {
  @Output() recipeEmmitted = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://source.unsplash.com/jUPOXXRNdcA/250x250'),
    new Recipe('Another test recipe', 'This is another test', 'https://source.unsplash.com/fdlZBWIP0aM/250x250')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
