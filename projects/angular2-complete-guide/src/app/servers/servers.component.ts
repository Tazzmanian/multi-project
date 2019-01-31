import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreation = 'Server was not created!';

  constructor(
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.allowNewServer = !this.allowNewServer;
    }, 3000);
  }

  onCreation() {
    this.serverCreation = 'Created';
  }

}
