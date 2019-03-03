import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: []
})
export class HeaderComponent implements OnInit {

  constructor(private dss: DataStorageService) { }

  ngOnInit() {
  }

  onSave() {
    this.dss.storeRecipies().subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    ) ;
  }

  onFetch() {
    this.dss.retrieveRecipes();
  }

}
