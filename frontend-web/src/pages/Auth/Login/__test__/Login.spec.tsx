import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '..';

test('should render Login', () => {
    const title = 'Login';

    render(
        <Login />
    );

    const titleElement = screen.getByText(title);
    const iconPassword = screen.getByTestId('show-password');
    
    expect(titleElement).toBeInTheDocument();
    expect(iconPassword).toBeInTheDocument();
});