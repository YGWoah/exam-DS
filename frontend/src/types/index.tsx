export interface Conference {
  id: number;
  title: string;
  type: 'academic' | 'commercial';
  date: string;
  duration: string;
  registrations: number;
  score: number;
}

export interface Keynote {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  fonction: string;
}
