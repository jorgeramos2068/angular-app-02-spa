import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit 
{
  constructor(
    private router:Router
  )
  {}

  ngOnInit() {
  }

  /**
   * Function to search a hero
   */
  buscarHeroe( termino:string )
  {
    this.router.navigate( [ '/search', termino ] );
  }

}
