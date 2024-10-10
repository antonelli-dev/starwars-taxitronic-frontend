import PropTypes from 'prop-types';
import TableRow from './TableRow';

const Table = ({ headers, data }) => {
  return (
    <table className="min-w-full w-full text-left bg-white bg-opacity-70 text-black rounded-lg">
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header} className="py-2 px-4 border-b">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className="border-t">
            <TableRow data={item} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      speciesName: PropTypes.string.isRequired,
      homeworld: PropTypes.string.isRequired, 
    })
  ).isRequired,
};

export default Table;
