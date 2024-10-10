import { getCharactersByFilm } from '../../infrastructure/services/CharacterService';

export class GetFilmCharacters {
  async execute(filmId) {
    return await getCharactersByFilm(filmId);
  }
}
