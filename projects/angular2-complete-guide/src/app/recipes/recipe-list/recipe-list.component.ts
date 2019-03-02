import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  
  recipes: Recipe[];
  subs: Subscription;
  
  constructor(private rS: RecipeService, private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.recipes = this.rS.getRecipes();
    this.subs = this.rS.recipeChange.subscribe((r: Recipe[]) => {
      this.recipes = r;
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  newRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
