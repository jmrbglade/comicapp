import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  searchResult: Heroe[];
  term: string;

  constructor( private _heroesService: HeroesService,
               private _activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe( params => {
      this.term = params.term;
      this.searchResult = this._heroesService.searchHeroes( params.term );
      console.log(this.searchResult);
    });
  }

}
