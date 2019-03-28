import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';
import * as RecipeActions from '../store/recipe.actions';
import { Observable } from 'rxjs';
import * as fromRecipe from '../store/recipe.reducers';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipeState: Observable<fromRecipe.State>;
  id: number;

  constructor(private route: ActivatedRoute, private router: Router,
     private store: Store<fromRecipe.FeatureState>) { }

  ngOnInit() {
    this.route.params.subscribe( (params: Params) => {
      this.id = +params['id'];
      this.recipeState = this.store.select('recipes');
    });
  }

  onAddToShoppingList() {
    console.log('testt');
    this.store.select('recipes').pipe(
      take(1),
      map((state: fromRecipe.State) => {
        return state.recipes[this.id];
      })
      ).subscribe((recipe: Recipe) => {
        console.log('testt', recipe);
        this.store.dispatch(new ShoppingListActions.AddIngredients(recipe.ingredients));
    });
  }

  edit() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDelete() {
    console.log('TTT', this.id);
    this.store.dispatch(new RecipeActions.DeleteRecipes(this.id));
    this.router.navigate(['/recipes']);
  }

}
