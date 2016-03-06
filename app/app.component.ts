import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { DashboardComponent } from 'app/dashboard/dashboard.component';

@Component({
  selector: 'triumph',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS
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
    component: DashboardComponent
  },
  {
    path: '/gameroom',
    name: 'Gameroom',
    component: DashboardComponent
  },
  {
    path: '/account',
    name: 'Account',
    component: DashboardComponent
  }
])
export class AppComponent {}
