import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
// import { Router } from '@angular/router'; // For routing with a button

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private _heroesService: HeroesService) {
  }
  // For routing with a button add the parameter: private _router: Router

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
  }

  /* // For routing with a button
  verHeroe( idx: number ){
    this._router.navigate(['/heroe', idx]);
  }
  */

}
