import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListRoutingModule } from './shopping-list.routing';

@NgModule({
   declarations: [
       ShoppingListComponent,
       ShoppingEditComponent
   ],
   imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      // ShoppingListRoutingModule
   ],
   providers: [],
})
export class ShoppinListModule { }
