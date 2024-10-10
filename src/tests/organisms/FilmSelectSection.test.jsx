import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import FilmSelectSection from '../../components/organisms/FilmSelectSection';
import FilmSelectContainer from '../../interface/containers/FilmSelectContainer';

jest.mock('../../interface/containers/FilmSelectContainer', () => jest.fn(() => <div role="combobox">Mocked FilmSelectContainer</div>));

describe('FilmSelectSection Component', () => {
    const onFilmSelect = jest.fn();
    test('renders FilmSelectSection component with heading', () => {
        render(<FilmSelectSection onFilmSelect={onFilmSelect} />);

        const headingElement = screen.getByText('May the force be with Taxitronic');
        expect(headingElement).toBeInTheDocument();

        const comboboxElement = screen.getByRole('combobox');
        expect(comboboxElement).toBeInTheDocument();
    });

    test('renders FilmSelectContainer with onFilmSelect prop', () => {
        render(<FilmSelectSection onFilmSelect={onFilmSelect} />);

        const containerElement = screen.getByRole('combobox');
        expect(containerElement).toBeInTheDocument();

        expect(FilmSelectContainer).toHaveBeenCalledWith({ onFilmSelect }, {});
    });

    test('calls onFilmSelect when passed', () => {
        render(<FilmSelectSection onFilmSelect={onFilmSelect} />);

        expect(FilmSelectContainer).toHaveBeenCalled();
    });
});
