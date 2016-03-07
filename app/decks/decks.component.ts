import { Component} from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
  selector: 'decks',
  templateUrl: 'app/decks/decks.component.html',
  styleUrls: ['app/decks/decks.component.css']
})
export class DecksComponent{

  constructor(
    private _router: Router) {
  }
}
