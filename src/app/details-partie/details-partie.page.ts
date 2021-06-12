import { AlertController, NavController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Partie } from '../models/partie.model';
import { PartiesService } from '../services/parties/parties.service';
import { Toast } from '@capacitor/toast';

@Component({
  selector: 'app-details-partie',
  templateUrl: './details-partie.page.html',
  styleUrls: ['./details-partie.page.scss'],
})
export class DetailsPartiePage implements OnInit {
  partie: any;

  constructor(
    public partiesService: PartiesService,
    public navCtrl: NavController,
    public alertCtrl: AlertController
    ) { }

  ngOnInit() {
    this.partie = this.partiesService.getPartieSelected();
    console.log(this.partie);
  }

  editPartie(partie: Partie) {
    this.partiesService.getPartieSelected();
    this.navCtrl.navigateForward('/edit-partie');
  }

  async supprimerPartie(date: number) {
    const alert = await this.alertCtrl.create({
      header: 'Suppression',
      message: 'Supprimer cette partie ?',
      buttons: [
        {
          text: 'annuler',
          role: 'cancel',
          cssClass: 'warning'
        }, {
          text: 'Supprimer',
          handler: () => {
            this.partiesService.deletePartie(date);
            this.navCtrl.navigateBack('/parties');
            this.presentToastWithOptions();
          }
        }
      ]
    });
    await alert.present();
  }

  async presentToastWithOptions() {
    await Toast.show({
      text: 'Partie supprimée',
      duration: 'short',
      position: 'center'
    });
  }

}
