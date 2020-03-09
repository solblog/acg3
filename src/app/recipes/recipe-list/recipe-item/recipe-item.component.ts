import { Component, OnInit, Inject } from '@angular/core';
import { Recipe } from '../../model/recipe.model'

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  recipe: Recipe;
  
  constructor() {
    
  }

  ngOnInit(): void {
  }

}
