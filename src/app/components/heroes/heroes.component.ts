import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit
{
  heroes:Heroe[] = [];

  /**
   * Constructor
   */
  constructor(
    private _heroesService: HeroesService,
    private router: Router
  )
  {
  }

  /**
   * ngOnInit()
   */
  ngOnInit()
  {
    this.heroes = this._heroesService.getHeroes();
    console.log( this.heroes );
  }

  verHeroe( i: number )
  {
    this.router.navigate( [ '/heroe', i ] );
  }

}
