import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StocksComponent } from './stocks/stocks.component';
import { HighlightDirective } from './shared/highlight.directive';
import { DataFormatterPipe } from './shared/data-formatter.pipe';
import { routing } from './app.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BondsDirective } from './bonds.directive';

@NgModule({
  declarations: [
    AppComponent,
    StocksComponent,
    HighlightDirective,
    DataFormatterPipe,
    DashboardComponent,
    BondsDirective
  ],
  imports: [
    BrowserModule,
    routing,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
