import { Perso } from './perso.model';

export class Partie {
  title: string;
  scenario: string;
  etapes?: string[];
  pj?: Perso[];
  date?: string;
  creatingDate: number;
}
