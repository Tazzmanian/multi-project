import { Component, OnInit } from '@angular/core';
import { StockService } from '../stocks/stock.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  stocks: string[];

  constructor(private ss: StockService) { }

  ngOnInit() {
    this.getAllStocks();
  }

  getAllStocks() {
    this.ss.getStocksAPI().subscribe(
      data => {
        console.log(data);
        this.stocks = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  createStock(code: string, name: string) {
    console.log(code, name);
    this.ss.createStock(code, name)
      .subscribe(data => {
        this.getAllStocks();
      }, err => {
        console.log(err);
      });
  }

}
