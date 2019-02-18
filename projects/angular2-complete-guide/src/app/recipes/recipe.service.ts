import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    public recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'Test',
            'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=aWyDp3CA',
            [new Ingredient('Meat', 1), new Ingredient('Fries', 10)]),
        new Recipe('A Test Recipe', 'Test1',
            'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=aWyDp3CA',
            [new Ingredient('Bones', 1), new Ingredient('BUns', 10)]),
    ];


    getRecipes(): Recipe[] {
        return this.recipes.slice();
    }

    constructor(private sls: ShoppingListService) { }

    addIngredientsToShoppingList(ing: Ingredient[]) {
        this.sls.addIngredients(ing);
    }

}
