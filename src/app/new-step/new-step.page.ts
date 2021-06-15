import { NavController } from '@ionic/angular';
import { PartiesService } from './../services/parties/parties.service';
import { Partie } from 'src/app/models/partie.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-step',
  templateUrl: './new-step.page.html',
  styleUrls: ['./new-step.page.scss'],
})
export class NewStepPage implements OnInit {
  public partieAvecNote: Partie;

  constructor(
    public partiesService: PartiesService,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
    this.partieAvecNote = this.partiesService.getPartieSelected();
  }

  addStep(step: any) {
    step.date = new Date().getTime();
    step.fait = 'false';
    this.partieAvecNote.etapes.push(step);
    this.partiesService.editPartie(this.partieAvecNote);
    this.navCtrl.navigateBack('/details-partie');
  }

}
