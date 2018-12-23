import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quick Start';
  today = new Date();

  profile = {id: 1001, name: 'James Bond', role: 'Administrator'};
}
