import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import MainLayout from '../../components/template/MainLayout';

describe('MainLayout Component', () => {

  const renderWithChildren = () => {
    render(
      <MainLayout>
        <div>Test Content</div>
      </MainLayout>
    );
  };

  test('renders the header with the correct text', () => {
    renderWithChildren();
    const headerElement = screen.getByText('Star Wars Characters');
    expect(headerElement).toBeInTheDocument();
  });

  test('renders the main content with children', () => {
    renderWithChildren();
    const mainContent = screen.getByText('Test Content');
    expect(mainContent).toBeInTheDocument();
  });

  test('renders the footer with the correct text', () => {
    renderWithChildren();
    const footerElement = screen.getByText('© 2024 Star Wars App. All rights reserved.');
    expect(footerElement).toBeInTheDocument();
  });

});
