import { Component, OnInit, Input} from '@angular/core';
import { HeroesService, Heroe} from '../../../services/heroes.service';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: Heroe;
  @Input() idx: number;

  constructor() { }

  ngOnInit(): void {
  }

}
