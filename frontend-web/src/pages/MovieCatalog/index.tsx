import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import Pagination from '../../core/components/Pagination';
import { Genre, MovieResponse } from '../../core/types/Movie';
import { customStyles } from '../../core/utils/filterStyles';
import { makePrivateRequest } from '../../core/utils/request';
import MovieCardLoader from './components/Loaders/MovieCardLoader';
import MovieCard from './components/MovieCard';
import './styles.scss';


type FilterForm = {
    genreId?: number;
}


const MovieCatalog = () => {
    const [moviesResponse, setMoviesResponse] = useState<MovieResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingGenres, setIsLoadingGenres] = useState(false);
    const [activePage, setActivePage] = useState(0);
    const [genre, setGenre] = useState<Genre>();
    const [genres, setGenres] = useState<Genre[]>();

    const getMovies = useCallback((filter?: FilterForm) => {
        const params = {
            page: activePage,
            size: 8,
            genreId:  filter?.genreId
        }

        setIsLoading(true);
        makePrivateRequest({ url: '/movies', params })
            .then(response => setMoviesResponse(response.data))
            .finally(() => {
                setIsLoading(false);
            });
    }, [activePage]);

    useEffect(() => {
        getMovies();
    }, [getMovies])

    useEffect(() => {
        setIsLoadingGenres(true);
        makePrivateRequest({url: '/genres'})
            .then(response => setGenres(response.data))
            .finally(() => setIsLoadingGenres(false))
    }, []);

    const handleChangeGenre = (genre: Genre) => {
        setGenre(genre);

        getMovies({genreId: genre?.id});
    }

        return (
        <div className="movie-catalog-container">
            <div className="movie-catalog-content">
                <div className="card-base filter-container">
                    <Select
                        name="genres"
                        key={`select-${genre?.id}`}
                        value={genre}
                        isLoading={isLoadingGenres}
                        options={genres}
                        getOptionLabel={(option: Genre) => option.name}
                        getOptionValue={(option: Genre) => String(option.id)}
                        styles={customStyles}
                        placeholder="Gêneros"
                        className="filter"
                        inputId="genres"
                        onChange={value => handleChangeGenre(value as Genre)}
                        theme={theme => ({
                            ...theme,
                            borderRadius: 10,
                            colors: {
                                ...theme.colors,
                                primary25: '#ffc700',
                                primary: 'white',
                            },
                        })}
                        isClearable
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