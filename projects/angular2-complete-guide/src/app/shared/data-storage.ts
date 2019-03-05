import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { filter, map, } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
    constructor(private http: HttpClient,
        private rs: RecipeService,
        private as: AuthService
        ) { }

    storeRecipies() {
        const token = this.as.getToken();
        const params = new HttpParams().set('auth', token);
        return this.http.put('https://ng-recipe-book-23331.firebaseio.com/recipe.json', this.rs.getRecipes(), {params: params});
    }

    async retrieveRecipes() {
        const token = await this.as.getToken();
        const params = new HttpParams().set('auth', token);
        return this.http.get<Recipe[]>('https://ng-recipe-book-23331.firebaseio.com/recipe.json', {params: params})
            .pipe(
                map(r => {
                    r.forEach(x => {
                        if (!x.ingredients) {
                            x.ingredients = [];
                        }
                    });
                    console.log(r);
                    return r;
                })
            )
            .subscribe(
                (data) => {
                    this.rs.setRecipies(data);
                }
            );
    }

}
