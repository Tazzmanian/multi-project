import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

    @ViewChild('name')
    name: ElementRef;

    @ViewChild('amount')
    amount: ElementRef;

    constructor(private sls: ShoppingListService) { }

    ngOnInit() {
    }

    onClearItem() {

    }

    onDeleteItem() {

    }

    onAddItem() {
        const ing = new Ingredient(this.name.nativeElement.value, +this.amount.nativeElement.value);
        console.log(ing);
        this.sls.ingredientAdded(ing);
    }

}
