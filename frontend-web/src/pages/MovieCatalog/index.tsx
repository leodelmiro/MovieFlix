import React from 'react';
import Select from 'react-select';
import Pagination from '../../core/components/Pagination';
import { customStyles } from '../../core/utils/filterStyles';
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
                    <MovieCard
                        title ="O Retorno do Rei"
                        release = {2013}
                        description="O Olho do Inimigo está se movendo"
                    />
                    <MovieCard
                        title ="O Retorno do Rei"
                        release = {2013}
                        description="O Olho do Inimigo está se movendo"
                    />
                    <MovieCard
                        title ="O Retorno do Rei"
                        release = {2013}
                        description="O Olho do Inimigo está se movendo"
                    />
                    <MovieCard
                        title ="O Retorno do Rei"
                        release = {2013}
                        description="O Olho do Inimigo está se movendo"
                    />
                    <MovieCard
                        title ="O Retorno do Rei"
                        release = {2013}
                        description="O Olho do Inimigo está se movendo"
                    />
                    <MovieCard
                        title ="O Retorno do Rei"
                        release = {2013}
                        description="O Olho do Inimigo está se movendo"
                    />
                    <MovieCard
                        title ="O Retorno do Rei"
                        release = {2013}
                        description="O Olho do Inimigo está se movendo"
                    />
                </div>
            </div>
            <Pagination totalPages={10} activePage={0} onChange={() => console.log("olá")} />
        </div>
    );
};

export default MovieCatalog;