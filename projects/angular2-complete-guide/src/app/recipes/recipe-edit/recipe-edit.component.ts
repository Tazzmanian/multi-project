import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.model';
import * as fromRecipe from '../store/recipe.reducers';
import * as RecipeActions from '../store/recipe.actions';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromRecipe.FeatureState>) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      if (!isNaN(this.id)) {
        this.editMode = true;
      }
      this.initForm();
    });
  }

  private initForm() {
    let recipeName = '';
    let recipeImg = '';
    let recipeD = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      // const rec = this.rs.getRecipe(this.id);
      this.store.select('recipes').pipe(
        take(1)
      ).subscribe((recipeState: fromRecipe.State) => {
        const rec = recipeState.recipes[this.id];
        recipeName = rec.name;
        recipeImg = rec.imagePath;
        recipeD = rec.description;

        rec.ingredients.forEach((x: Ingredient) => {
          recipeIngredients.push(new FormGroup({
            'name': new FormControl(x.name, Validators.required),
            'amount': new FormControl(x.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          }));
        });
      });
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImg, Validators.required),
      'description': new FormControl(recipeD, Validators.required),
      'ingredients': recipeIngredients
    });
  }

  onSubmit() {
    if (this.editMode) {
      // this.rs.updateRecipe(this.id, this.recipeForm.value);
      this.store.dispatch(new RecipeActions.UpdateRecipes({ index: this.id, updateRecipe: this.recipeForm.value }));
    } else {
      // this.rs.addRecipe(this.recipeForm.value);
      this.store.dispatch(new RecipeActions.AddRecipes(this.recipeForm.value));
    }

    this.cancel();
  }

  onIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }

  cancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  deleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

}
