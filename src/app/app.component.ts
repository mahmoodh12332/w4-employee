import { Component, OnInit } from '@angular/core';
import {ConnectionService} from 'ng-connection-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pps-masterws';
  public isOnline = navigator.onLine;
  constructor(private connectionService: ConnectionService) {
  }
  ngOnInit(): void {
    this.connectionService.monitor().subscribe((isOnline) => {
      this.isOnline = isOnline;
    });
  }
}
