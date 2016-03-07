import { Deck } from './deck';
import { DECK } from './mock-deck';
import { Injectable } from 'angular2/core';

@Injectable()
export class DeckService {

  getDeck() {
    return Promise.resolve(DECK);
  }

	getCard(search: string) {
    return DECK.cards.find(string);
  }

  draw() {
    return DECK.cards[Math.floor(Math.random() * (DECK.cards.length))];
  }
}
