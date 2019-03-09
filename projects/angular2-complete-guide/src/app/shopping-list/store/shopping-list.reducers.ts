import * as ShoppingListActions from './shopping-list.actions';
import { Ingredient } from '../../shared/ingredient.model';

export interface AppState {
    shoppingList: State;
}

export interface State {
    ingredients: Ingredient[];
    editedIngredient?: Ingredient;
    editedIngredientIndex?: number;
}

const initialState: State = {
    ingredients: [
        new Ingredient('Apple', 5),
        new Ingredient('Tomatoes', 5),
    ],
    editedIngredient: null,
    editedIngredientIndex: -1
};


export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {

    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            };
        case ShoppingListActions.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: [...state.ingredients, ...action.payload]
            };
        case ShoppingListActions.UPDATE_INGREDIENT: {
            const ing = state.ingredients[state.editedIngredientIndex];
            const upIng = {
                ...ing,
                ...action.payload
            };
            const ings = [...state.ingredients];
            ings[state.editedIngredientIndex] = upIng;
            return {
                ...state,
                ingredients: ings,
                editedIngredient: null,
                editedIngredientIndex: -1
            };
        }
        case ShoppingListActions.DELETE_INGREDIENT: {
            const ingss = [...state.ingredients];
            ingss.splice(state.editedIngredientIndex, 1);
            return {
                ...state,
                ingredients: ingss,
                editedIngredient: null,
                editedIngredientIndex: -1
            };
        }
        case ShoppingListActions.START_EDITING: {
            const eing = {...state.ingredients[action.payload]};
            return {
                ...state,
                editedIngredient: eing,
                editedIngredientIndex: action.payload
            };
        }
        case ShoppingListActions.STOP_EDITING: {
            return {
                ...state,
                editedIngredient: null,
                editedIngredientIndex: -1
            };
        }
        default: return state;
    }
}
