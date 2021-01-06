import React from 'react';
import { render, screen } from '@testing-library/react';
import Auth from '..';

test('should render Login', () => {
    const title = 'Avalie Filmes';
    const subTitle = 'Faça parte do nosso catálogo de divulgação e aumente a venda dos seus produtos';
    
    render(
        <Auth />
    );

    const titleElement = screen.getByText(title);
    const subTitleElement = screen.getByText(subTitle)
    const authDraw = screen.getByTestId('auth-draw');
    
    expect(titleElement).toBeInTheDocument();
    expect(subTitleElement).toBeInTheDocument();
    expect(authDraw).toBeInTheDocument();
});