import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

@NgModule({
   declarations: [
       ShoppingListComponent,
       ShoppingEditComponent
   ],
   imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
   ],
   providers: [],
})
export class ShoppinListModule { }
