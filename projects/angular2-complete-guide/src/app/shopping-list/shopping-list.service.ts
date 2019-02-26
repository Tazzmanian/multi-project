import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 5),
  ];

  public changedIngredients = new Subject<Ingredient[]>();

  public startedEditing = new Subject<number>();

  constructor() { }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  ingredientAdded(ing: Ingredient) {
    this.ingredients.push(ing);
    this.changedIngredients.next(this.ingredients.slice());
  }

  getIngredient(id: number) {
    return this.ingredients[id];
  }

  addIngredients(ing: Ingredient[]) {
    this.ingredients.push(...ing);
    this.changedIngredients.next(this.ingredients.slice());
  }

  updateIngredient(id: number, ing: Ingredient) {
    this.ingredients[id] = ing;
    this.changedIngredients.next(this.ingredients.slice());
  }

  deleteIngredient(id: number) {
    this.ingredients.splice(id, 1);
    this.changedIngredients.next(this.ingredients.slice());
  }

}
