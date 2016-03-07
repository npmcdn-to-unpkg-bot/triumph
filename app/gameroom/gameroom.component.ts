import { Component} from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
  selector: 'account',
  templateUrl: 'app/gameroom/gameroom.component.html',
  styleUrls: ['app/gameroom/gameroom.component.css']
})
export class GameroomComponent{

  constructor(
    private _router: Router) {
  }
}
