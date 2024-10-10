import CharactersTableContainer from '../../interface/containers/CharactersTableContainer';
import PropTypes from 'prop-types';

const CharacterTableSection = ({ selectedFilm }) => {
  return (
    <section>
      <CharactersTableContainer selectedFilm={selectedFilm} />
    </section>
  );
};

CharacterTableSection.propTypes = {
  selectedFilm: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default CharacterTableSection;
