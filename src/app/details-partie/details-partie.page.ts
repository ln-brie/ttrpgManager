import { Component, OnInit } from '@angular/core';
import { PartiesService } from '../services/parties/parties.service';

@Component({
  selector: 'app-details-partie',
  templateUrl: './details-partie.page.html',
  styleUrls: ['./details-partie.page.scss'],
})
export class DetailsPartiePage implements OnInit {
  partie: any;

  constructor(public partiesService: PartiesService) { }

  ngOnInit() {
    this.partie = this.partiesService.getPartieSelected();
    console.log(this.partie);
  }

}
