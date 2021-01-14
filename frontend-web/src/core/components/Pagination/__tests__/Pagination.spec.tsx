import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pagination from '..';

test('should render pagination', () => {
    const totalPages = 3;
    const activePage = 0;
    const onChange = () => null;


    render(
        <Pagination
            totalPages={totalPages}
            activePage={activePage}
            onChange={onChange}
        />
    )

    const firstPageItem = screen.getByText('1');
    const secondPageItem = screen.getByText('2');
    const thirdPageItem = screen.getByText('3');

    expect(firstPageItem).toBeInTheDocument();
    expect(firstPageItem).toHaveClass('active');
    expect(secondPageItem).toBeInTheDocument();
    expect(secondPageItem).not.toHaveClass('active');
    expect(thirdPageItem).toBeInTheDocument();
    expect(thirdPageItem).not.toHaveClass('active');
});

test('should trigger onChange action', () => {
    const totalPages = 3;
    const activePage = 1;
    const onChange = jest.fn();


    render(
        <Pagination 
            totalPages={totalPages}
            activePage={activePage}
            onChange={onChange}
        />
    );

    const firstPageItem = screen.getByText('1');

    userEvent.click(firstPageItem);
    expect(onChange).toHaveBeenCalledWith(0);
});