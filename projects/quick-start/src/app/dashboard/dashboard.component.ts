import { Component, OnInit } from '@angular/core';
import { StockService } from '../stocks/stock.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  stocks: any[];

  selectedStock: any;
  updateEnabled = false;

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

  updateStock(stock: string, name: string) {
    this.updateEnabled = false;
    this.ss.updateStock(this.selectedStock.id, stock, name).subscribe(data => {
      // this.stocks.filter(s => s.stockId === data.stockId).
      console.log('fdfasda', data);
      this.stocks.forEach(x => {
        x = data;
        this.stocks = [...this.stocks];
      });
      location.reload();
    });
  }

  loadDetails(stock: any) {
    this.updateEnabled = true;
    this.selectedStock = stock;
  }

}
