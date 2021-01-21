import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import Pagination from '../../core/components/Pagination';
import { MovieResponse } from '../../core/types/Movie';
import { customStyles } from '../../core/utils/filterStyles';
import { makePrivateRequest } from '../../core/utils/request';
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

    useEffect(() => {
        const params = {
            page: activePage,
            size: 8
        }

        setIsLoading(true);
        makePrivateRequest({ url: '/movies', params })
            .then(response => setMoviesResponse(response.data))
            .finally(() => {
                setIsLoading(false);
            });
    }, [activePage]);

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
                    {isLoading ? <MovieCardLoader /> : (
                        moviesResponse?.content.map(movie => (
                            <Link to={`/movies/${movie.id}`} key={movie.id}>
                                <MovieCard movie={movie} />
                            </Link>
                        ))
                    )}
                </div>
            </div>
            {moviesResponse && (
                <Pagination
                    totalPages={moviesResponse.totalPages}
                    activePage={activePage}
                    onChange={(page) => setActivePage(page)}
                />
            )}
        </div>
    );
};

export default MovieCatalog;