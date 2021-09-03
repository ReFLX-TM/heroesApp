import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChampionResponse } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor( private http: HttpClient ) { }

  getHeroes( ) {
    return this.http.get<ChampionResponse>('http://ddragon.leagueoflegends.com/cdn/11.17.1/data/es_MX/champion.json')
  }
}
