import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 5),
  ];

  public changedIngredients = new EventEmitter<Ingredient[]>();

  constructor() { }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  ingredientAdded(ing: Ingredient) {
    this.ingredients.push(ing);
    this.changedIngredients.emit(this.ingredients.slice());
  }

  addIngredients(ing: Ingredient[]) {
    this.ingredients.push(...ing);
    this.changedIngredients.emit(this.ingredients.slice());
  }

}
