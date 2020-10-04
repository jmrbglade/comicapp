import { Component, ViewChild, ElementRef} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  @ViewChild('navBurger')  navBurger: ElementRef;
  @ViewChild('navMenu')  navMenu: ElementRef;

  constructor( private _router: Router ) { }

  toogleNavbar(){
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }

  searchHero(term: string): void{
    if (term.length > 0){
      this._router.navigate(['/search', term]);
    }
  }

}
