import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Deck } from './deck';
import { DeckService } from 'app/decks/deck.service';

@Component({
  selector: 'decks',
  templateUrl: 'app/decks/decks.component.html',
  styleUrls: ['app/decks/decks.component.css']
})
export class DecksComponent implements OnInit {

  constructor(
    private _deckService: DeckService,
    private _router: Router) {
  }

  ngOnInit() {
    this.deck = this._deckService.getDeck();
  }

  draw() {
    this.card = this._deckService.draw();
  }
}
