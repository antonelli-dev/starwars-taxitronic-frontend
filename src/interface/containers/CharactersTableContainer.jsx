import { useEffect, useState } from 'react';
import ApplicationService from '../../infrastructure/services/ApplicationService';
import PropTypes from 'prop-types';

const CharactersTableContainer = ({ selectedFilm }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!selectedFilm) return;

    const fetchCharacters = async () => {
      setLoading(true);
      try {
        const charactersData = await ApplicationService.getFilmCharacters(selectedFilm);
        setCharacters(charactersData);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [selectedFilm]);


  if (loading) {
    return (
      <div className="mt-5">
        {[...Array(5)].map((_, idx) => (
          <div key={idx} className="skeleton-row bg-gray-300 h-10 w-full mb-2 rounded-md animate-pulse"></div>
        ))}
      </div>
    );
  }

  if (error) return <div>Error loading characters: {error.message}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {characters.map((character, index) => (
        <div key={index} className="bg-gray-800 bg-opacity-25 text-white p-4 m-2 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold mb-2">{character.name}</h3>
          <p><strong>Gender:</strong> {character.gender}</p>
          <p><strong>Species:</strong> {character.speciesName}</p>
          <p><strong>Homeworld:</strong> {character.homeworld}</p>
        </div>
      ))}
    </div>
  );
};

CharactersTableContainer.propTypes = {
  selectedFilm: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default CharactersTableContainer;
