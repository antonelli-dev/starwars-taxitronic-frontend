import PropTypes from 'prop-types';
import FilmSelect from '../../components/molecules/FilmSelect'; 

const FilmSelectPresenter = ({ films, onFilmSelect }) => {
  return (
    <FilmSelect
      films={films}        
      onFilmSelect={onFilmSelect} 
    />
  );
};

FilmSelectPresenter.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  onFilmSelect: PropTypes.func.isRequired,
};

export default FilmSelectPresenter;
