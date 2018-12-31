import { Component, OnInit } from '@angular/core';
import { StockService } from '../stocks/stock.service';
import { Stock } from '../stocks/stock';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.1.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  stocks: Stock[];

  selectedStock: any;
  updateEnabled = false;
  submited = false;
  newStock = new Stock(0, '', '');
  model: any = {};

  constructor(private ss: StockService) { }

  ngOnInit() {
    this.getAllStocks();
  }

  onSubmit() {
    // console.log(form);
    this.submited = true;
  }

  cancel() {
    this.submited = false;
    this.newStock = new Stock(0, '', '');
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
      this.getAllStocks();
      // location.reload();
    });
  }

  deleteStock(id: string) {
    this.ss.deleteStock(id).subscribe(data => {
      this.getAllStocks();
    });
    // location.reload();
  }

  loadDetails(stock: any) {
    this.updateEnabled = true;
    this.selectedStock = stock;
  }

}
