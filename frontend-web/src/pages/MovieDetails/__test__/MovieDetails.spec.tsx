import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieDetails from '..';

test('should render Comment', () => {
    const title = 'O Retorno do Rei';
    const release = '2013'
    const subtitle = 'O Olho do inimigo está se movendo';
    const description = 'O confronto final entre as forças do bem e do mal que lutam pelo controle do futuro da Terra Média se aproxima. ' + 
    'Sauron planeja um grande ataque a Minas Tirith, capital de Gondor, ' + 
    'o que faz com que Gandalf e Pippin partam para o local na intenção de ajudar a resistência. ' +
    'Um exército é reunido por Theoden em Rohan, em mais uma tentativa de deter as forças de Sauron. ' +
    'Enquanto isso, Frodo, Sam e Gollum seguem sua viagem rumo à Montanha da Perdição para destruir o anel.';

    render(
        <MovieDetails/>
    )

    const titleText = screen.getByText(title);
    const releaseText = screen.getByText(release);
    const subtitleText = screen.getByText(subtitle)
    const descriptionText = screen.getByText(description)

    expect(titleText).toBeInTheDocument();
    expect(releaseText).toBeInTheDocument();
    expect(subtitleText).toBeInTheDocument();
    expect(descriptionText).toBeInTheDocument();
});