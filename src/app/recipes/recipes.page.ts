import { Component, OnInit } from '@angular/core';

import { Recipes } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipes[]=[
    {id:'r1',title:'Fries',imageUrl:'https://media.chefdehome.com/740/0/0/ratatouille/ratatouille-casserole.jpg',ingredients:['potato','cheese','carrot']},
    {id:'r2',title:'Manchurian',imageUrl:'https://www.vegrecipesofindia.com/wp-content/uploads/2012/05/veg-manchurian-recipe-1.jpg',ingredients:['potato','cheese','carrot']}
  ];




  constructor() { }

  ngOnInit() {
  }

}
