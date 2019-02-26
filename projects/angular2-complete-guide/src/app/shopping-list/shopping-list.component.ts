import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

    ingredients: Ingredient[];
    private subsc: Subscription;

    constructor(private sls: ShoppingListService) { }

    ngOnInit() {
        this.ingredients = this.sls.getIngredients();
        this.subsc = this.sls.changedIngredients.subscribe((x: Ingredient[]) => {
            this.ingredients = x;
        });
    }

    ngOnDestroy(): void {
        this.subsc.unsubscribe();
    }

    onEditItem(id: number) {
        this.sls.startedEditing.next(id);
    }

}
