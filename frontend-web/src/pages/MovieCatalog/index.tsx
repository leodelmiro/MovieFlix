import React from 'react';
import Select from 'react-select';
import { customStyles } from './filterStyles';
import MovieCard from './MovieCard';
import './styles.scss';


const options = [
    { value: 'aventura', label: 'Aventura' },
    { value: 'acao', label: 'Ação' },
    { value: 'terror', label: 'Terror' }
  ]

const MovieCatalog = () => {

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
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                </div>
            </div>
        </div>
    );
};

export default MovieCatalog;