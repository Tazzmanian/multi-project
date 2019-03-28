import { Effect, Actions, ofType } from '@ngrx/effects';
import * as RecipeActions from './recipe.actions';
import { switchMap, map, withLatestFrom, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipe.model';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRecipe from './recipe.reducers';
import { Router } from '@angular/router';

@Injectable()
export class RecipeEffects {

    @Effect()
    recipeFetch = this.action$.pipe(
        ofType(RecipeActions.FETCH_RECIPES),
        switchMap((action: RecipeActions.FetchRecipes) => {
            return this.http.get<Recipe[]>('https://ng-recipe-book-23331.firebaseio.com/recipe.json');
        }),
        map((r: Recipe[]) => {
            r.forEach(x => {
                if (!x.ingredients) {
                    x.ingredients = [];
                }
            });
            return {
                type: RecipeActions.SET_RECIPES,
                payload: r
            };
        })
    );

    @Effect({dispatch: false})
    recipeStore = this.action$.pipe(
        ofType(RecipeActions.STORE_RECIPES),
        withLatestFrom(this.store.select('recipes')),
        switchMap(([action , state]) => {
            console.log(state.recipes);
            return this.http.put('https://ng-recipe-book-23331.firebaseio.com/recipe.json', state.recipes);
        })
    );

    @Effect({dispatch: false})
    deleteStore = this.action$.pipe(
        ofType(RecipeActions.DELETE_RECIPES),
        tap(x => {
            console.log('TTTT');
            this.router.navigate(['/recipes']);
        })
    );

    constructor(private action$: Actions, private http: HttpClient, private store: Store<fromRecipe.FeatureState>,
         private router: Router) { }

}
