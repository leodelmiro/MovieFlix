import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieCard from '..';

test('should render Comment', () => {
    const title = 'O Retorno do Rei';
    const release = 2013;
    const description = 'O Olho do Inimigo está se movendo';

    render(
        <MovieCard 
            title={title}
            release={release}
            description={description}
        />
    )

    const titleText = screen.getByText(title);
    const releaseText = screen.getByText(release.toString());
    const descriptionText = screen.getByText(description)

    expect(titleText).toBeInTheDocument();
    expect(releaseText).toBeInTheDocument();
    expect(descriptionText).toBeInTheDocument();
});