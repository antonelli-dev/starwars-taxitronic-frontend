import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Table from '../../components/atoms/Table'; 

describe('Table Component', () => {
  const headers = ['Name', 'Gender', 'Species', 'Homeworld'];
  const data = [
    {
      name: 'Luke Skywalker',
      gender: 'Male',
      speciesName: 'Human',
      homeworld: 'Tatooine',
    },
    {
      name: 'Leia Organa',
      gender: 'Female',
      speciesName: 'Human',
      homeworld: 'Alderaan',
    },
  ];

  test('renders all rows of data', () => {
    render(<Table headers={headers} data={data} />);

    data.forEach((item) => {
      const nameElement = screen.getByText(item.name);
      const genderElement = screen.getByText(item.gender);
      const speciesElements = screen.getAllByText(item.speciesName);
      const homeworldElement = screen.getByText(item.homeworld);

      expect(nameElement).toBeInTheDocument();
      expect(genderElement).toBeInTheDocument();
      expect(speciesElements.length).toBeGreaterThan(0); 
      expect(homeworldElement).toBeInTheDocument();
    });
  });
});
