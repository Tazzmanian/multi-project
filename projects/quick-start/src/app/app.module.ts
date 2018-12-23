import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StocksComponent } from './stocks/stocks.component';
import { HighlightDirective } from './shared/highlight.directive';
import { DataFormatterPipe } from './shared/data-formatter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StocksComponent,
    HighlightDirective,
    DataFormatterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
