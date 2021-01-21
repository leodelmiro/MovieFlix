import React, { useState } from 'react';
import Select from 'react-select';
import Pagination from '../../core/components/Pagination';
import { MovieResponse } from '../../core/types/Movie';
import { customStyles } from '../../core/utils/filterStyles';
import MovieCardLoader from './components/Loaders/MovieCardLoader';
import MovieCard from './components/MovieCard';
import './styles.scss';


const options = [
    { value: 'aventura', label: 'Aventura' },
    { value: 'acao', label: 'Ação' },
    { value: 'terror', label: 'Terror' }
]

const MovieCatalog = () => {
    const [moviesResponse, setMoviesResponse] = useState<MovieResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const [activePage, setActivePage] = useState(0);

    return (
        <div className="movie-catalog-container">
            <div className="movie-catalog-content">
                <div className="card-base filter-container">
                    <Select
                        className="filter"
                        options={options}
                        styles={customStyles}
                        placeholder="Categorias"
                        theme={theme => ({
                            ...theme,
                            borderRadius: 10,
                            colors: {
                                ...theme.colors,
                                primary25: '#ffc700',
                                primary: 'white',
                            },
                        })}
                    />
                </div>
                <div className="movie-cards-container">
                    {isLoading ? <MovieCardLoader/> : 
                    (<MovieCard
                        title ="O Retorno do Rei"
                        release = {2013}
                        description="O Olho do Inimigo está se movendo"
                    />)
                }
                </div>
            </div>
            <Pagination 
                totalPages={1} 
                activePage={activePage} 
                onChange={(page) => setActivePage(page)} 
            />
        </div>
    );
};

export default MovieCatalog;