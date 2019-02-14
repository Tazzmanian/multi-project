import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

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

    @Output()
    ingredientAdded = new EventEmitter<Ingredient>();

    constructor() { }

    ngOnInit() {
    }

    onClearItem() {

    }

    onDeleteItem() {

    }

    onAddItem() {
        const ing = new Ingredient(this.name.nativeElement.value, +this.amount.nativeElement.value);
        console.log(ing);
        this.ingredientAdded.emit(ing);
    }

}
