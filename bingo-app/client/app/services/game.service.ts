import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GameService {

  constructor(private http:Http) {
    console.log('Game Service Initialized...')
  }

  getGame_Q_A() {
    return this.http.get('http://localhost:8888/api/game').map(res => res.json());
  }


}

