package com.leodelmiro.movieflix.services;

import com.leodelmiro.movieflix.dto.MovieDTO;
import com.leodelmiro.movieflix.entities.Genre;
import com.leodelmiro.movieflix.entities.Movie;
import com.leodelmiro.movieflix.repositories.GenreRepository;
import com.leodelmiro.movieflix.repositories.MovieRepository;
import com.leodelmiro.movieflix.services.exceptions.DatabaseException;
import com.leodelmiro.movieflix.services.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.util.Optional;

@Service
public class MovieService {

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private GenreRepository genreRepository;

    @Transactional(readOnly = true)
    public Page<MovieDTO> findAllPaged(Long genreId, PageRequest pageRequest) {
        Page<Movie> list = movieRepository.find(genreId, pageRequest);
        return list.map(MovieDTO::new);
    }

    @Transactional(readOnly = true)
    public MovieDTO findBydId(Long id) {
        Optional<Movie> obj = movieRepository.findById(id);
        Movie entity = obj.orElseThrow(() -> new ResourceNotFoundException("Movie not found"));
        return new MovieDTO(entity, entity.getReviews());
    }

    @Transactional
    public MovieDTO insert(MovieDTO dto) {
        Movie entity = new Movie();
        dtoToEntity(entity, dto);
        movieRepository.save(entity);
        return new MovieDTO(entity);
    }

    @Transactional
    public MovieDTO update(Long id, MovieDTO dto) {
        try {
            Movie entity = movieRepository.getOne(id);
            dtoToEntity(entity, dto);
            movieRepository.save(entity);
            return new MovieDTO(entity);
        } catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException("Movie id: " + id + " not found");
        }
    }

    public void delete(Long id) {
        try {
            movieRepository.deleteById(id);
        } catch (EmptyResultDataAccessException e) {
            throw new ResourceNotFoundException("Movie id: " + id + " not found");
        } catch (DataIntegrityViolationException e) {
            throw new DatabaseException("Integrity violation");
        }
    }

    private void dtoToEntity(Movie entity, MovieDTO dto) {
        entity.setTitle(dto.getTitle());
        entity.setSubTitle(dto.getSubTitle());
        entity.setYear(dto.getYear());
        entity.setImgUrl(dto.getImgUrl());
        entity.setSynopsis(dto.getSynopsis());

        Genre genre = genreRepository.getOne(dto.getGenreId());
        entity.setGenre(genre);
    }

}
