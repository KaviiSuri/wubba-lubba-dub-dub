import { RICK_AND_MORTY_BASE_URL } from "../constants";

export type CharacterStatus = "Alive" | "Dead" | "Unknown"

export type Location = {
  name: string;
  url: string;
}

export type Character = {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
}


export type Info = {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export type CharactersResponse = {
  info: Info;
  results: Character[];
}

export const fetchCharacters = async ({ page = 1, searchQuery = "", signal }: { page?: number, searchQuery?: string, signal: AbortSignal | undefined }): Promise<CharactersResponse> => {
  const res = await fetch(`${RICK_AND_MORTY_BASE_URL}/character/?name=${searchQuery}&page=${page}`, {
    method: 'GET',
    signal,
  });
  if (!res.ok) {
    throw Error("An Error Occured Fetching Characters")
  }
  const data = await res.json();

  return data;
}
