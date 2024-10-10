import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TableRow from '../../components/atoms/TableRow';

describe('TableRow Component', () => {
    const rowData = {
        name: 'Luke Skywalker',
        gender: 'Male',
        speciesName: 'Human',
        homeworld: 'Tatooine',
    };

    test('renders all the data fields for the row', () => {
        render(
            <table>
                <tbody>
                    <tr>
                        <TableRow data={rowData} />
                    </tr>
                </tbody>
            </table>
        );

        const nameElement = screen.getByText('Luke Skywalker');
        const genderElement = screen.getByText('Male');
        const speciesElement = screen.getByText('Human');
        const homeworldElement = screen.getByText('Tatooine');

        expect(nameElement).toBeInTheDocument();
        expect(genderElement).toBeInTheDocument();
        expect(speciesElement).toBeInTheDocument();
        expect(homeworldElement).toBeInTheDocument();
    });
});
