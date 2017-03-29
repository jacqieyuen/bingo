import { Component } from '@angular/core';
import { GameService } from '../../services/game.service';


@Component({
  moduleId: module.id,
  selector: 'game',
  templateUrl: 'game.component.html',
})

export class GameComponent {
  constructor(private gameService:GameService){
    this.gameService.getGame_Q_A().subscribe(game_q_a => {console.log(game_q_a)})
  }
}