import { Injectable } from '@angular/core';
import { Partie } from 'src/app/models/partie.model';
import { Storage } from '@capacitor/storage';


@Injectable({
  providedIn: 'root'
})
export class PartiesService {
  private parties: Array<Partie>;
  private partieSelected: any;

async getPartie(): Promise<Partie[]> {
  return Storage.get({key: 'parties'}).then(data => {
    this.parties = data.value != null ? JSON.parse(data.value) : [];
    return this.parties;
  });
}

async addPartie(partie: Partie) {
    this.parties.push(partie);
    await Storage.set({
      key: 'parties',
      value: JSON.stringify(this.parties)
    });
  }

  definePartie(partie: any) {
    this.partieSelected = partie;
  }

  getPartieSelected() {
    return this.partieSelected;
  }

  async storeParties() {
    return await Storage.set({
      key: 'parties',
      value: JSON.stringify(this.parties)
    });
  }

  deletePartie(datePartie: number) {
    this.parties = this.parties.filter(element=> element.creatingDate !== datePartie);
    this.storeParties();
  }

  editPartie(updatedPartie: Partie) {
    for (let partie of this.parties) {
      if (partie.creatingDate === updatedPartie.creatingDate) {
        partie = updatedPartie;
        break;
      }
    }
    this.partieSelected = updatedPartie;
    this.storeParties();

  }



}


