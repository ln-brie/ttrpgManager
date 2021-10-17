import { Injectable } from '@angular/core';
import { Partie } from 'src/app/models/partie.model';
import { Storage } from '@capacitor/storage';


@Injectable({
  providedIn: 'root'
})
export class PartiesService {
  private parties: Array<Partie>;
  private partieSelected: Partie;
  private persoSelected: any;

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

  definePerso(perso: any) {
    this.persoSelected = perso;
  }

  getPartieSelected() {
    return this.partieSelected;
  }

  getPersoSelected() {
    return this.persoSelected;
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

  editPerso(updatedPerso: any, partie: Partie) {
    for (let pj of this.partieSelected.pj) {
      if (pj.date === updatedPerso.date) {
        pj = updatedPerso;
        break;
      }
    }
    this.persoSelected = updatedPerso;
    this.editPartie(partie);
  }

  deletePerso(datePerso: number) {
    this.partieSelected.pj = this.partieSelected.pj.filter(element => element.date !== datePerso);
    this.editPartie(this.partieSelected);
  }

  editDate(updateDate: any) {
    this.partieSelected.date = updateDate;
    this.editPartie(this.partieSelected);
  }



}


