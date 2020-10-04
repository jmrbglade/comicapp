import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent{

  heroe: any = {};

  constructor( private _activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService,
               private _router: Router) {

    this._activatedRoute.params.subscribe( params => {
      this.heroe = this._heroesService.getHeroe( params.id );
      console.log(this.heroe);
    });

  }

  goHeroes(): void{
     this._router.navigate(['/heroes']);
  }

}
