import { Partie } from 'src/app/models/partie.model';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { PartiesService } from '../services/parties/parties.service';

@Component({
  selector: 'app-new-perso',
  templateUrl: './new-perso.page.html',
  styleUrls: ['./new-perso.page.scss'],
})
export class NewPersoPage implements OnInit {
  partieAvecPerso: Partie;

  constructor(
    public partiesServices: PartiesService,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
    this.partieAvecPerso = this.partiesServices.getPartieSelected();
  }

  addPerso(partie: any) {
    this.partieAvecPerso.pj.push(partie);
    this.partiesServices.editPartie(this.partieAvecPerso);
    this.navCtrl.navigateBack('/details-partie');
  }

}
