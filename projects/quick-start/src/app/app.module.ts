import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StocksComponent } from './stocks/stocks.component';
import { HighlightDirective } from './shared/highlight.directive';
import { DataFormatterPipe } from './shared/data-formatter.pipe';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    StocksComponent,
    HighlightDirective,
    DataFormatterPipe
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
