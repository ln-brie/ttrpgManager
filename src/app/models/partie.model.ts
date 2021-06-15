export class Partie {
  title: string;
  scenario: string;
  etapes?: {
    description: string;
    fait: boolean;
    date: number;
  }[];
  pj?: {
    nom: string;
    joueureuse: string;
    notes?: string;
    date: number;
  }[];
  date?: string;
  creatingDate: number;
}
