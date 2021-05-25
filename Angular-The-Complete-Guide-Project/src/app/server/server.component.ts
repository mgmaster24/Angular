import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  public serverId = 10;
  public serverStatus = 'offline';
  public serverName = '';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  public getServerStatus(): string {
    return this.serverStatus;
  }

  public isOnline(): boolean {
    return this.serverStatus === 'online';
  }

  public getColor(): string {
    return this.isOnline() ? 'green' : 'red';
  }
}
