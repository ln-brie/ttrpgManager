import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  menu = [
    {title : 'Accueil', url : '/home'},
    {title : 'Mes parties en cours', url : '/parties'}
  ];

  constructor() {}
}
