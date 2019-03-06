import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeService } from './recipes/recipe.service';
import { HttpClientModule } from '@angular/common/http';
import { DataStorageService } from './shared/data-storage';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { RicepesModule } from './recipes/recipes.module';
import { SharedModule } from './shared/shared.module';
import { ShoppinListModule } from './shopping-list/shopping-list.module';
import { ShoppingListRoutingModule } from './shopping-list/shopping-list.routing';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      SignupComponent,
      SigninComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      HttpClientModule,
      RicepesModule,
      SharedModule,
      ShoppinListModule,
      ShoppingListRoutingModule
   ],
   providers: [ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuardService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
