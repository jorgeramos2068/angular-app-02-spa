import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit
{
  heroes:any[] = [];
  term:string;

  /**
   * Constructor
   */
  constructor(
    private activatedRoute:ActivatedRoute,
    private _heroesService:HeroesService
  )
  {}

  /**
   * ngOnInit() method
   */
  ngOnInit()
  {
    this.activatedRoute.params.subscribe( params => {
      this.term = params[ 'term' ];
      this.heroes = this._heroesService.buscarHeroes( params[ 'term' ] );
    } );
  }
}
