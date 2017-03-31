"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var game_service_1 = require("../../services/game.service");
var GameComponent = (function () {
    function GameComponent(gameService) {
        var _this = this;
        this.gameService = gameService;
        this.gameService.getGame_Q_A()
            .subscribe(function (game_q_a) {
            _this.game_q_a = game_q_a;
        });
        this.notClicked = false;
    }
    GameComponent.prototype.clickQ = function (item) {
        console.log(item);
        this.notClicked = false;
    };
    GameComponent.prototype.clickNum = function () {
        this.notClicked = true;
    };
    return GameComponent;
}());
GameComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'game',
        templateUrl: 'game.component.html',
    }),
    __metadata("design:paramtypes", [game_service_1.GameService])
], GameComponent);
exports.GameComponent = GameComponent;
//# sourceMappingURL=game.component.js.map