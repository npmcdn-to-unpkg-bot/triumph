import { Component} from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
  selector: 'account',
  templateUrl: 'app/account/account.component.html',
  styleUrls: ['app/account/account.component.css']
})
export class AccountComponent{

  constructor(
    private _router: Router) {
  }
}
