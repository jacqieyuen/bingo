import { Component } from '@angular/core';
import { GameService } from '../../services/game.service';


@Component({
  moduleId: module.id,
  selector: 'game',
  templateUrl: 'game.component.html',
})

export class GameComponent {
  game_q_a : "";
  question : string;
  notClicked: boolean;

  constructor(private gameService:GameService){
    this.gameService.getGame_Q_A()
      .subscribe(game_q_a => {
        this.game_q_a = game_q_a;
      });
    this.notClicked = false;
  }

  clickQ(item){
    console.log(item);
    this.notClicked=false;
  }
  clickNum(){
    this.notClicked=true
  }
}