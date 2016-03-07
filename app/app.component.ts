import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { DeckService } from 'app/decks/deck.service';

import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { AccountComponent } from 'app/account/account.component';
import { DecksComponent } from 'app/decks/decks.component';
import { GameroomComponent } from 'app/gameroom/gameroom.component';

@Component({
  selector: 'triumph',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    DeckService
  ]
})
@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/decks',
    name: 'Decks',
    component: DecksComponent
  },
  {
    path: '/gameroom',
    name: 'Gameroom',
    component: GameroomComponent
  },
  {
    path: '/account',
    name: 'Account',
    component: AccountComponent
  }
])
export class AppComponent {}
