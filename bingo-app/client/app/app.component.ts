import { Component }    from '@angular/core';
import { GameService }  from './services/game.service';


@Component({
  moduleId      : module.id,
  selector      : 'my-app',
  templateUrl   : 'app.component.html',
  providers     : [GameService]
})

export class AppComponent { }