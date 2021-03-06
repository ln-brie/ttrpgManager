import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';

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

  constructor(
    public route: Router,
    ) {
      //Storage.clear();
  }

}
