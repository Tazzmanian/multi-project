import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../store/shopping-list.actions';
import { AppState } from '../store/shopping-list.reducers';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

    @ViewChild('f') form: NgForm;

    private subs: Subscription;
    editing = false;
    editedItem: Ingredient;

    constructor(private store: Store<AppState>) { }

    ngOnInit() {
        this.subs = this.store.select('shoppingList').subscribe(x => {
            console.log(x);
            if (x.editedIngredientIndex > -1) {
                this.form.setValue(x.editedIngredient);
                this.editedItem = x.editedIngredient;
                this.editing = true;
            } else {
                this.editing = false;
            }
        });
    }
    ngOnDestroy(): void {
        this.subs.unsubscribe();
        this.store.dispatch(new ShoppingListActions.StopEditing());
    }

    onClearItem() {
        this.reset();
    }

    onDeleteItem() {
        this.store.dispatch(new ShoppingListActions.DeleteIngredient());
        this.reset();
    }

    onAddItem(f: NgForm) {
        console.log(f);
        const t = new Ingredient(f.value.name, f.value.amount);
        console.log(t, this.editing);
        if (this.editing) {
            this.store.dispatch(new ShoppingListActions.UpdateIngredient(t));
        } else {
            this.store.dispatch(new ShoppingListActions.AddIngredient(t));
        }
        this.reset();
    }

    reset() {
        this.editing = false;
        this.form.reset();
    }


}
