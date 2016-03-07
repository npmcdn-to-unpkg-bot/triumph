System.register(['./mock-deck', 'angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var mock_deck_1, core_1;
    var DeckService;
    return {
        setters:[
            function (mock_deck_1_1) {
                mock_deck_1 = mock_deck_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DeckService = (function () {
                function DeckService() {
                }
                DeckService.prototype.getDeck = function () {
                    return Promise.resolve(mock_deck_1.DECK);
                };
                DeckService.prototype.getCard = function (search) {
                    return mock_deck_1.DECK.cards.find(string);
                };
                DeckService.prototype.draw = function () {
                    return mock_deck_1.DECK.cards[Math.floor(Math.random() * (mock_deck_1.DECK.cards.length))];
                };
                DeckService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], DeckService);
                return DeckService;
            }());
            exports_1("DeckService", DeckService);
        }
    }
});
//# sourceMappingURL=deck.service.js.map