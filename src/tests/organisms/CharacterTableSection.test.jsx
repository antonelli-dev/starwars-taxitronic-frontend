import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CharacterTableSection from '../../components/organisms/CharacterTableSection';

jest.mock('../../interface/containers/CharactersTableContainer', () => jest.fn(({ selectedFilm }) => {
    return selectedFilm ? <div role="table">Mocked CharactersTableContainer</div> : null;
}));

describe('CharacterTableSection Component', () => {
    const selectedFilm = '1';

    test('renders CharacterTableSection component', () => {
        render(<CharacterTableSection selectedFilm={selectedFilm} />);

        const tableElement = screen.getByRole('table');
        expect(tableElement).toBeInTheDocument();
    });

    test('does not render anything if selectedFilm is an empty string', () => {
        render(<CharacterTableSection selectedFilm="" />);

        expect(screen.queryByRole('table')).not.toBeInTheDocument();
    });
});
