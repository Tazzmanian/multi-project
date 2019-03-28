import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import * as RecipeActions from './recipe.actions';
import { Statement } from '@angular/compiler';
import * as fromApp from '../../store/app.reducers';

export interface FeatureState extends fromApp.AppState {
    recipes: State;
}

export interface State {
    recipes: Recipe[];
}

const initialState: State = {
    recipes: [
        new Recipe('A Test Recipe', 'Test',
            // tslint:disable-next-line:max-line-length
            'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=aWyDp3CA',
            [new Ingredient('Meat', 1), new Ingredient('Fries', 10)]),
        new Recipe('A Test Recipe', 'Test1',
            // tslint:disable-next-line:max-line-length
            'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=aWyDp3CA',
            [new Ingredient('Bones', 1), new Ingredient('BUns', 10)])
    ]
};


export function recipeReducer(state = initialState, action: RecipeActions.RecipeActions) {
    switch (action.type) {
        case (RecipeActions.SET_RECIPES):
            return {
                ...state,
                recipes: [...action.payload]
            };
        case (RecipeActions.ADD_RECIPES):
            return {
                ...state,
                recipes: [...state.recipes, action.payload]
            };
        case (RecipeActions.UPDATE_RECIPES):
            const recipe = state.recipes[action.payload.index];
            const update = { ...recipe, ...action.payload.updateRecipe };
            const recipes = [...state.recipes];
            recipes[action.payload.index] = update;
            return {
                ...state,
                recipes: recipes
            };
        case (RecipeActions.DELETE_RECIPES):
             const drecipes = [...state.recipes].splice(action.payload, 1);
            console.log('TTT', drecipes, action.payload);
            return {
                ...state,
                recipes: drecipes
            };
        default: return state;
    }
}
