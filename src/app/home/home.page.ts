import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  infos = {
    name : 'TTRPG Manager',
    photo : './assets/img/ttrpgBan.png',
    logo : './assets/img/logo.png'
  };

  constructor(public route: Router) {}

  addPartie() {
    this.route.navigate(['/new-partie']);

  }

}
