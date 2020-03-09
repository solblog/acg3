import { Component, OnInit } from '@angular/core';
import { Recipe} from '../model/recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


  recipes: Recipe[] = [
    new Recipe('A Test recipe','This is a simple test',
    'http://www.fnstatic.co.uk/images/content/recipe/one-pot-pan-seared-chicken-breasts-with-cherry-tomatoes-and-white-beans.jpg')
    ,new Recipe('A Test recipe2','This is a simple test 2',
    'http://www.fnstatic.co.uk/images/content/recipe/chicken-breasts-with-pesto-and-parmigiano-reggiano.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
