import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreation = 'Server was not created!';
  serverName: string;
  serverCreated = false;

  constructor(
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.allowNewServer = !this.allowNewServer;
    }, 3000);
  }

  onCreation() {
    this.serverCreated = true;
    this.serverCreation = 'Created';
  }

  onUpdateServerName(data: Event) {
    console.log(data);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}