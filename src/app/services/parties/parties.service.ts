import { Injectable } from "@angular/core";
import { Partie } from "src/app/models/partie.model";

@Injectable({
  providedIn: 'root'
})
export class PartiesService {
  private parties: Array<Partie> = [
    { title : 'D&D5', scenario : 'La Malédiction de Strahd'},
    { title : 'Barbarians of Lemuria', scenario : 'Le Dieu Voilé'},
    { title : 'Call of Cthulhu', scenario : 'Les Masques de Nyarlathotep'}
  ];

getPartie() {
  return this.parties;
}

addPartie(partie : Partie) {
  this.parties.push(partie);
}

}


