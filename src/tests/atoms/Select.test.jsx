
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Select from '../../components/atoms/Select';

describe('Select Component', () => {
  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
  ];

  test('renders Select component with placeholder', () => {
    render(<Select options={options} onChange={() => { }} placeholder="Select an option" />);
    const placeholder = screen.getByText('Select an option');
    expect(placeholder).toBeInTheDocument();
  });

  test('renders all options passed as props', () => {
    render(<Select options={options} onChange={() => { }} placeholder="Select an option" />);
    options.forEach(option => {
      const optionElement = screen.getByText(option.label);
      expect(optionElement).toBeInTheDocument();
    });
  });

  test('calls onChange when an option is selected', () => {
    const handleChange = jest.fn();
    render(<Select options={options} onChange={handleChange} placeholder="Select an option" />);
    const selectElement = screen.getByRole('combobox');
    fireEvent.change(selectElement, { target: { value: options[1].value } });
    expect(handleChange).toHaveBeenCalled();
    expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
  });
});