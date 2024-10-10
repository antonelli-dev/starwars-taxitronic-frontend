import { useEffect, useState } from 'react';
import FilmSelectPresenter from '../presenters/FilmSelectPresenter';
import ApplicationService from '../../infrastructure/services/ApplicationService';
import PropTypes from 'prop-types';

const FilmSelectContainer = ({ onFilmSelect }) => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const filmsData = await ApplicationService.getAvailableFilms();
        setFilms(filmsData);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchFilms();
  }, []);

  if (loading) return <div>Loading films...</div>;
  if (error) return <div>Error loading films: {error.message}</div>;

  return (
    <FilmSelectPresenter films={films} onFilmSelect={onFilmSelect} />
  );
};

FilmSelectContainer.propTypes = {
  onFilmSelect: PropTypes.func.isRequired,
};

export default FilmSelectContainer;
