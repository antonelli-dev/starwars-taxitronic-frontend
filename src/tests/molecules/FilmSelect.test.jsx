import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FilmSelect from '../../components/molecules/FilmSelect';
import '@testing-library/jest-dom';


describe('FilmSelect Component', () => {
    const films = [
        { id: 1, title: 'A New Hope' },
        { id: 2, title: 'The Empire Strikes Back' },
        { id: 3, title: 'Return of the Jedi' },
    ];

    test('renders the select component with film options', () => {
        render(<FilmSelect films={films} onFilmSelect={jest.fn()} />);

        expect(screen.getByText('Select a Star Wars Film')).toBeInTheDocument();

        expect(screen.getByText('Select a Film')).toBeInTheDocument();


        films.forEach(film => {
            expect(screen.getByText(film.title)).toBeInTheDocument();
        });
    });

    test('calls onFilmSelect when a film is selected', () => {
        const handleFilmSelect = jest.fn();
        render(<FilmSelect films={films} onFilmSelect={handleFilmSelect} />);
        const selectElement = screen.getByRole('combobox');
        fireEvent.change(selectElement, { target: { value: films[1].id } });

        expect(handleFilmSelect).toHaveBeenCalledWith(films[1].id.toString());
    });
});
