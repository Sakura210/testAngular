import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(private messageService:MessageService) { }
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService:fetched heroes');
    return Observable.of(HEROES);
  }
}
