import PropTypes from 'prop-types';

const TableRow = ({ data }) => {
  return (
    <>
      <td className="py-2 px-4 border">{data.name}</td>
      <td className="py-2 px-4 border">{data.gender}</td>
      <td className="py-2 px-4 border">{data.speciesName}</td>
      <td className="py-2 px-4 border">{data.homeworld}</td> 
    </>
  );
};

TableRow.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    gender: PropTypes.string,
    speciesName: PropTypes.string,
    homeworld: PropTypes.string, 
  }).isRequired,
};

export default TableRow;
