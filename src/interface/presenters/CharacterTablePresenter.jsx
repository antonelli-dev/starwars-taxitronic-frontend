import PropTypes from 'prop-types';
import CharacterTable from '../../components/molecules/CharacterTable';

const CharacterTablePresenter = ({ characters }) => {
  const filteredCharacters = characters.filter(
    (char) =>
      char.name && char.gender && char.speciesName && char.homeworld
  );

  return (
    <div className="character-table">
      <h2 className="text-2xl font-semibold mb-4">Characters</h2>
      <CharacterTable characters={filteredCharacters} />
    </div>
  );
};

CharacterTablePresenter.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      speciesName: PropTypes.string.isRequired,
      homeworld: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CharacterTablePresenter;
