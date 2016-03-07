System.register(['angular2/core', 'angular2/router', 'app/decks/deck.service'], function(exports_1, context_1) {
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
    var core_1, router_1, deck_service_1;
    var DecksComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (deck_service_1_1) {
                deck_service_1 = deck_service_1_1;
            }],
        execute: function() {
            DecksComponent = (function () {
                function DecksComponent(_deckService, _router) {
                    this._deckService = _deckService;
                    this._router = _router;
                }
                DecksComponent.prototype.ngOnInit = function () {
                    this.deck = this._deckService.getDeck();
                };
                DecksComponent.prototype.draw = function () {
                    this.card = this._deckService.draw();
                };
                DecksComponent = __decorate([
                    core_1.Component({
                        selector: 'decks',
                        templateUrl: 'app/decks/decks.component.html',
                        styleUrls: ['app/decks/decks.component.css']
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof deck_service_1.DeckService !== 'undefined' && deck_service_1.DeckService) === 'function' && _a) || Object, router_1.Router])
                ], DecksComponent);
                return DecksComponent;
                var _a;
            }());
            exports_1("DecksComponent", DecksComponent);
        }
    }
});
//# sourceMappingURL=decks.component.js.map