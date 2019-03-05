import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular2-complete-guide';
  name = '';
  selected: string;


  onNavigate(event: string) {
    this.selected = event;
  }

  ngOnInit(): void {
    const config = {
      apiKey: 'AIzaSyA-e21aJcpHY3O4fjYzSdP4c_18cFBHLh8',
      authDomain: 'ng-recipe-book-23331.firebaseapp.com',
    };
    firebase.initializeApp(config);
  }
}
