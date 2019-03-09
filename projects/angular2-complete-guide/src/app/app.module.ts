import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.modul';
import { StoreModule } from '@ngrx/store';
import { shoppingListReducer } from './shopping-list/store/shopping-list.reducers';
import { ShoppinListModule } from './shopping-list/shopping-list.module';

@NgModule({
   declarations: [
      AppComponent,
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      SharedModule,
      AuthModule,
      CoreModule,
      ShoppinListModule,
      StoreModule.forRoot({shoppingList: shoppingListReducer})
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
