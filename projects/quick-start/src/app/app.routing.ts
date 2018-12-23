import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StocksComponent } from './stocks/stocks.component';

const appRoutes: Routes = [{
    path: 'stocks',
    component: StocksComponent
}];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
