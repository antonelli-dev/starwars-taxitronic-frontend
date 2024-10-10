import { getFilms } from '../../infrastructure/services/FilmService';

export class GetAvailableFilms {
  async execute() {
    return await getFilms();
  }
}
