import React from 'react';
import { render, screen } from '@testing-library/react';
import ButtonIcon from '..';

test('should render ButtonIcon', () => {
    const title = 'logar';

    render(
        <ButtonIcon title={title} />
    );

    const titleElement = screen.getByText(title);
    const iconElement = screen.getByTestId('arrow-icon');
    
    expect(titleElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
});