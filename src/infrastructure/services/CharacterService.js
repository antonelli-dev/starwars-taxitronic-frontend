import Character from '../../domain/entities/Character';
import httpClient from './HttpClient';

export const getCharactersByFilm = async (filmId) => {
  try {
    const response = await httpClient.get(`/starwars/v1/films/${filmId}/characters`);
    const data = response?.data?.data || [];
    return data.map(i => new Character(i.name, i.gender, i.speciesName == 'Undefined' ? 'Unknown' : i.speciesName, i.homeworld))

  } catch (error) {
    console.error(`Error fetching characters for film ID ${filmId}:`, error);
    throw error;
  }
};
