import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Router } from 'react-router-dom';
import history from '../../../core/utils/history';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { moviesResponse } from './fixtures';
import MovieCatalog from '..';

const server = setupServer(
    rest.get('http://localhost:8080/movies', (req, res, ctx) => {
      return res(ctx.json(moviesResponse))
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


test('should render MovieCatalog', async() => {

    render(
        <Router history={history}>
            <MovieCatalog />
        </Router>
    )

    expect(screen.getAllByTitle('Loading...')).toHaveLength(3);

    await waitFor(() => expect(screen.getByText('A Casa de Cera')).toBeInTheDocument());

    expect(screen.getByText('PC Gamer')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();

    expect(screen.queryAllByTitle('Loading...')).toHaveLength(0);
});