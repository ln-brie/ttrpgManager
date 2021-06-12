import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Partie } from '../models/partie.model';
import { PartiesService } from '../services/parties/parties.service';

@Component({
  selector: 'app-edit-partie',
  templateUrl: './edit-partie.page.html',
  styleUrls: ['./edit-partie.page.scss'],
})
export class EditPartiePage implements OnInit {
  partieModif: Partie;

  constructor(
    public partiesService: PartiesService,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
    this.partieModif = this.partiesService.getPartieSelected();
  }

  editPartie() {
    this.partiesService.editPartie(this.partieModif);
    this.navCtrl.navigateBack('/details-partie');
  }

}
