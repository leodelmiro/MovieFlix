import React from 'react';
import { render, screen } from '@testing-library/react';
import Comment from '..';

test('should render Comment', () => {
    const name = 'Maria da Silva';
    const comment = 'Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.';

    render(
        <Comment author={name} comment={comment}/>
    )

    const authorName = screen.getByText(name);
    const commentText = screen.getByText(comment);
    const iconElement = screen.getByTestId('star-icon');

    expect(authorName).toBeInTheDocument();
    expect(commentText).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
});