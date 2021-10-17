import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Partie } from '../models/partie.model';
import { PartiesService } from '../services/parties/parties.service';


@Component({
  selector: 'app-parties',
  templateUrl: './parties.page.html',
  styleUrls: ['./parties.page.scss'],
})
export class PartiesPage implements OnInit {
  parties: Array<Partie>;

  constructor(
    public partiesService: PartiesService,
    private navCtrl: NavController
    ) { }

  async ionViewWillEnter() {
    this.parties = await this.partiesService.getPartie();
  }

  clickPartie(partie: any) {
    this.partiesService.definePartie(partie);
    this.navCtrl.navigateForward('/details-partie');
  }

  ngOnInit() {
  }

}
