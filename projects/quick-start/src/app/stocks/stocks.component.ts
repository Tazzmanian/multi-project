import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {

  title = 'List of stocks: ';
  stocks = ['Apple', 'IBM', 'Google'];

  constructor() { }

  ngOnInit() {
  }

}
