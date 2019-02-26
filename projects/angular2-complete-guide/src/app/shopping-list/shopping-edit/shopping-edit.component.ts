import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

    @ViewChild('f') form: NgForm;

    private subs: Subscription;
    id: number;
    editing = false;
    editedItem: Ingredient;

    constructor(private sls: ShoppingListService) { }

    ngOnInit() {
        this.subs = this.sls.startedEditing.subscribe((id: number) => {
            this.id = id;
            this.editing = true;
            this.editedItem = this.sls.getIngredient(id);
            this.form.setValue({
                name: this.editedItem.name,
                amount: this.editedItem.amount
            });
        });
    }
    ngOnDestroy(): void {
        this.subs.unsubscribe();
    }

    onClearItem() {
        this.reset();
    }

    onDeleteItem() {
        this.sls.deleteIngredient(this.id);
        this.reset();
    }

    onAddItem(f: NgForm) {
        console.log(f);
        const t = new Ingredient(f.value.name, f.value.amount);
        console.log(t);
        if (this.editing) {
            this.sls.updateIngredient(this.id, t);
        } else {
            this.sls.ingredientAdded(t);
        }
        this.reset();
    }

    reset() {
        this.editing = false;
        this.form.reset();
    }


}
