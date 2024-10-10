import { GetAvailableFilms } from '../../application/usecases/GetAvailableFilms';
import { GetFilmCharacters } from '../../application/usecases/GetFilmCharacters';

class ApplicationService {
  constructor() {
    this.getAvailableFilmsUseCase = new GetAvailableFilms();
    this.getFilmCharactersUseCase = new GetFilmCharacters();
  }

  async getAvailableFilms() {
    return this.getAvailableFilmsUseCase.execute();
  }

  async getFilmCharacters(filmId) {
    return this.getFilmCharactersUseCase.execute(filmId);
  }
}

export default new ApplicationService();
