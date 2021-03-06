import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '..';

test('should render Navbar', () => {
    render(
        <Navbar/>
    )

    const navbarText = screen.getByText('MovieFlix');

    expect(navbarText).toBeInTheDocument();
});

test('should render logout when has current user', () => {
    beforeEach(() => {
        currentUser = 
    })

    render(
        <Navbar/>
    )

    const navbarText = screen.getByText('MovieFlix');

    expect(navbarText).toBeInTheDocument();
});