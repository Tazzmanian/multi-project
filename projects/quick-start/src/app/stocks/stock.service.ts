import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) { }

  getStocksAPI(): Observable<any> {
    return this.http.get('http://localhost:3000/stocks');
  }

  getStocks(): string[] {
    return ['Apple', 'Viniger', 'test'];
  }

  createStock(newStockCode: string, newName: string): Observable<any> {
    return this.http.post('http://localhost:3000/stocks', {name: newName, stockCode: newStockCode});
  }
}

