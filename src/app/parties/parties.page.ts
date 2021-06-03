import { Component, OnInit } from '@angular/core';
import { Partie } from '../models/partie.model';
import { PartiesService } from '../services/parties/parties.service';

@Component({
  selector: 'app-parties',
  templateUrl: './parties.page.html',
  styleUrls: ['./parties.page.scss'],
})
export class PartiesPage implements OnInit {
  parties: Array<Partie>;

  constructor(public partiesService: PartiesService) { }

  ionViewWillEnter() {
    this.parties = this.partiesService.getPartie();
    console.log(this.parties);
  }

  ngOnInit() {
  }

}
