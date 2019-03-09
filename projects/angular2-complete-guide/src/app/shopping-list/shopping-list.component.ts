import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './store/shopping-list.reducers';
import * as ShoppingListActions from './store/shopping-list.actions';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

    spState: Observable<{ ingredients: Ingredient[] }>;

    constructor(private store: Store<AppState>) { }

    ngOnInit() {
        this.spState = this.store.select('shoppingList');
    }

    onEditItem(id: number) {
        this.store.dispatch(new ShoppingListActions.StartEditing(id));
    }

}
