import { Component, OnInit } from '@angular/core';
import { StockService } from './stock.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {

  title = 'List of stocks: ';
  stocks = ['Apple', 'IBM', 'Google'];
  ss: StockService;
  stockMarkets = ['NYSE', 'NASDAQ', 'EUROEXT', 'HKSE', 'LSE'];
  showSM = true;

  constructor(ss: StockService) {
    this.ss = ss;
  }

  ngOnInit() {
    this.stocks = this.ss.getStocks();
  }

}
