import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

    recipeChange = new Subject<Recipe[]>();

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

    getRecipe(index: number): Recipe {
        return this.recipes.slice()[index];
    }

    constructor(private sls: ShoppingListService) { }

    addIngredientsToShoppingList(ing: Ingredient[]) {
        this.sls.addIngredients(ing);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipeChange.next(this.recipes.slice());
    }

    updateRecipe(index: number, recipe: Recipe) {
        this.recipes[index] = recipe;
        this.recipeChange.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipeChange.next(this.recipes.slice());
    }

    setRecipies(recipies: Recipe[]) {
        this.recipes = recipies;
        this.recipeChange.next(this.recipes.slice());
    }

}
