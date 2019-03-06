import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';

const routes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'signin', component: SigninComponent},
    {path: 'signup', component: SignupComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
