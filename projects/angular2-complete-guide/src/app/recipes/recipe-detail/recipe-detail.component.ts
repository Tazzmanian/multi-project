import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  id: number;

  constructor(private rs: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe( (params: Params) => {
      this.id = +params['id'];
      this.recipe = this.rs.getRecipe(this.id);
      console.log(this.id, this.recipe);
    });
  }

  onAddToShoppingList() {
    console.log(this.recipe.ingredients);
    this.rs.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  edit() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDelete() {
    this.rs.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}
