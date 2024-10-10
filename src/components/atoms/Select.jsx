import PropTypes from 'prop-types';

const Select = ({ options = [], onChange, placeholder }) => (
  <select onChange={onChange} className="bg-gray-800 text-white rounded-lg p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
    <option value="">{placeholder}</option>
    {options.map((option, index) => (
      <option key={index} value={option.value}>
        {option.label || 'No Label'}
      </option>
    ))}
  </select>
);

export default Select;

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};
