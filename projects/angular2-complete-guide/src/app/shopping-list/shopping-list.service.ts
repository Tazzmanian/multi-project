import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 5),
  ];

  public changedIngredients = new Subject<Ingredient[]>();

  constructor() { }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  ingredientAdded(ing: Ingredient) {
    this.ingredients.push(ing);
    this.changedIngredients.next(this.ingredients.slice());
  }

  addIngredients(ing: Ingredient[]) {
    this.ingredients.push(...ing);
    this.changedIngredients.next(this.ingredients.slice());
  }

}
