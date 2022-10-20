export interface Character {
  count: number;
  pages: number;
  next: string;
  prev: null;
  results: CharacterList[];
}

export interface CharacterList {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}
