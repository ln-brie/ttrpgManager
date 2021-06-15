import { Partie } from 'src/app/models/partie.model';
import { NavController } from '@ionic/angular';
import { PartiesService } from './../services/parties/parties.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-perso',
  templateUrl: './details-perso.page.html',
  styleUrls: ['./details-perso.page.scss'],
})
export class DetailsPersoPage implements OnInit {
  public persoSelected: any;
  public partieSelected: Partie;

  constructor(
    public partiesService: PartiesService,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
    this.persoSelected = this.partiesService.getPersoSelected();
    this.partieSelected = this.partiesService.getPartieSelected();
  }

  editPerso() {
    this.partiesService.editPerso(this.persoSelected, this.partieSelected);
    this.navCtrl.navigateBack('/details-partie');
  }

  deletePerso() {
    this.partiesService.deletePerso(this.persoSelected.date);
    this.navCtrl.navigateBack('details-partie');
  }

}
