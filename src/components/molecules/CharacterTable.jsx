import PropTypes from 'prop-types';
import Table from '../atoms/Table';

const CharacterTable = ({ characters }) => {
  const headers = ['Name', 'Gender', 'Species', 'Homeworld'];

  return (
    <Table headers={headers} data={characters} /> 
  );
};

CharacterTable.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      speciesName: PropTypes.string.isRequired,
      homeworld: PropTypes.string.isRequired, 
    })
  ).isRequired,
};

export default CharacterTable;
