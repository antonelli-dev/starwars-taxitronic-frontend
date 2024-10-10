import PropTypes from 'prop-types';
import Select from '../atoms/Select';

const FilmSelect = ({ films, onFilmSelect }) => {
  const filmOptions = films.map(film => ({
    label: film.title,
    value: film.id,
  }));

  return (
    <div className="p-4 bg-gray-700 rounded-md text-center items-center">
      <h2 className="text-yellow-400 font-bold text-xl mb-2">Select a Star Wars Film</h2>
      <Select
        options={filmOptions} 
        onChange={(e) => onFilmSelect(e.target.value)} 
        placeholder="Select a Film"
      />
    </div>
  );
};

FilmSelect.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired, 
    })
  ).isRequired,
  onFilmSelect: PropTypes.func.isRequired,
};

export default FilmSelect;
