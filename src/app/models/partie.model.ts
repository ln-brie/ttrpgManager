export class Partie {
  title: string;
  scenario: string;
  pj?: {
    nom: string;
    joueureuse: string;
    notes?: string;
    date: number;
  }[];
  date?: string;
  archive: boolean;
  creatingDate: number;
}
