import httpClient from "../services/HttpClient";


export const getFilms = async () => {
  try {
    const response = await httpClient.get('/starwars/v1/films');
    return response?.data?.data || [];

  } catch (error) {
    console.error('Error fetching films:', error);
    throw error;
  }
};
