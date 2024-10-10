import React from 'react';
import { render, screen, within } from '@testing-library/react';
import CharacterTable from '../../components/molecules/CharacterTable'; 
import '@testing-library/jest-dom';

describe('CharacterTable Component', () => {
  const characters = [
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

  test('renders the table with headers', () => {
    render(<CharacterTable characters={characters} />);

    const headers = ['Name', 'Gender', 'Species', 'Homeworld'];
    headers.forEach((header) => {
      expect(screen.getByText(header)).toBeInTheDocument();
    });
  });

  test('renders all character rows', () => {
    render(<CharacterTable characters={characters} />);
    
    const rows = screen.getAllByRole('row');
    
    characters.forEach((character, index) => {
      const row = rows[index + 1];
      const utils = within(row);
      
      expect(utils.getByText(character.name)).toBeInTheDocument();
      expect(utils.getByText(character.gender)).toBeInTheDocument();
      expect(utils.getByText(character.speciesName)).toBeInTheDocument();
      expect(utils.getByText(character.homeworld)).toBeInTheDocument();
    });
  });

  test('renders correctly when no characters are passed', () => {
    render(<CharacterTable characters={[]} />);

    const rows = screen.queryAllByRole('row');
    expect(rows.length).toBe(1);
  });
});
