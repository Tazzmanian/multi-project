import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Ingredient } from '../../shared/ingredient.model';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private rs: RecipeService, private router: Router) { }

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
      const rec = this.rs.getRecipe(this.id);
      recipeName = rec.name;
      recipeImg = rec.imagePath;
      recipeD = rec.description;

      rec.ingredients.forEach((x: Ingredient) => {
        recipeIngredients.push(new FormGroup({
          'name': new FormControl(x.name, Validators.required),
          'amount': new FormControl(x.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
        }));
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
    // console.log(this.recipeForm.controls['ingredients'].controls);
    // const newR = new Recipe(this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingredients'],
    // );
    if (this.editMode) {
      this.rs.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.rs.addRecipe(this.recipeForm.value);
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
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  deleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

}
