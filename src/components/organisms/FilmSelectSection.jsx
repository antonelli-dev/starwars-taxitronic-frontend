import FilmSelectContainer from '../../interface/containers/FilmSelectContainer';
import PropTypes from 'prop-types';

const FilmSelectSection = ({ onFilmSelect }) => {
  return (
    <section>
       <h2 className="text-yellow-600 font-bold text-6xl mb-12 text-center">May the force be with Taxitronic</h2>
      <FilmSelectContainer onFilmSelect={onFilmSelect} />
    </section>
  );
};

FilmSelectSection.propTypes = {
  onFilmSelect: PropTypes.func.isRequired,
};

export default FilmSelectSection;
