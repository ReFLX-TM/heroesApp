import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  heroes:any = []

  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void {
    this.getChampions()
  }
  getChampions() {
    this.heroesService.getHeroes().toPromise()
    .then(resp => {
      const response = resp.data
      for (const key in response) {
        if (Object.prototype.hasOwnProperty.call(response, key)) {
          this.heroes.push(response[key])
        }
      }
    })
  }

}
