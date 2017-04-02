import { Component }    from '@angular/core';
import { GameService }  from '../../services/game.service';
import * as io          from 'socket.io-client';

@Component({
  moduleId: module.id,
  selector: 'game',
  templateUrl: 'game.component.html',
})

export class GameComponent {
  game_q_a   : "";
  question   : string;
  notClicked : boolean;
  socket     : SocketIOClient.Socket;

  constructor (private gameService:GameService) {

    this.gameService.getGame_Q_A()
      .subscribe(game_q_a => {
        this.game_q_a = game_q_a;
      });

    this.notClicked = false;

    this.socket = io.connect('http://localhost:8888');

    this.socket.on('connection', (socket) => {
      console.log("sockets from angular")
    });

  };

  clickQ(item){

    console.log(item);

    this.notClicked=false;

  };

  clickNum(){

    this.notClicked=true

  }

}