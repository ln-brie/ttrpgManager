export class Partie {
  title: string;
  scenario: string;
  etapes?: {
    description: string;
    fait: boolean;
  }[];
  pj?: {
    nom: string;
    joueureuse: string;
    notes?: string;
  }[];
  date?: string;
  creatingDate: number;
}
