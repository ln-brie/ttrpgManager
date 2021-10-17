import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Partie } from '../models/partie.model';
import { PartiesService } from '../services/parties/parties.service';

@Component({
  selector: 'app-new-partie',
  templateUrl: './new-partie.page.html',
  styleUrls: ['./new-partie.page.scss'],
})
export class NewPartiePage implements OnInit {

  constructor(
    public navCtrl: NavController,
    public partiesService: PartiesService
  ) { }

  ngOnInit() {
  }

  addPartie(partie: Partie) {
    partie.pj = [];
    partie.archive = false;
    partie.creatingDate = new Date().getTime();
    this.partiesService.addPartie(partie);
    this.navCtrl.navigateBack('/parties');
  }

}
