import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angularapp';

  public onlineEvent!: Observable<Event>;
  public offlineEvent!: Observable<Event>;
  public subscriptions: Subscription[] = [];
  public connectionStatusMessage!: string;
  public connectionStatus: 'online' | 'offline' = 'online';
  constructor() { }
  ngOnInit(): void {
    this.onlineEvent = fromEvent(window, 'online');
    this.offlineEvent = fromEvent(window, 'offline');
    this.subscriptions.push(this.onlineEvent.subscribe(event => {
      this.connectionStatusMessage = 'Connected to internet! You are online';
      this.connectionStatus = 'online';
      console.log(this.connectionStatusMessage)
      alert(this.connectionStatusMessage)
    }));
    this.subscriptions.push(this.offlineEvent.subscribe(e => {
      this.connectionStatusMessage = 'Connection lost! You are offline';
      this.connectionStatus = 'offline';
      console.log(this.connectionStatusMessage)
      alert(this.connectionStatusMessage)

    }));
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
