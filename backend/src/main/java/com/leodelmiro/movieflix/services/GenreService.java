package com.leodelmiro.movieflix.services;

import com.leodelmiro.movieflix.dto.GenreDTO;
import com.leodelmiro.movieflix.entities.Genre;
import com.leodelmiro.movieflix.repositories.GenreRepository;
import com.leodelmiro.movieflix.services.exceptions.DatabaseException;
import com.leodelmiro.movieflix.services.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class GenreService {

    @Autowired
    private GenreRepository genreRepository;

    @Transactional(readOnly = true)
    public List<GenreDTO> findAll() {
        List<Genre> list = genreRepository.findAll();
        return list.stream().map(GenreDTO::new).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public GenreDTO findBydId(Long id) {
        Optional<Genre> obj = genreRepository.findById(id);
        Genre entity = obj.orElseThrow(() -> new ResourceNotFoundException("Genre not found"));
        return new GenreDTO(entity);
    }

    @Transactional
    public GenreDTO insert(GenreDTO dto) {
        Genre entity = new Genre();
        entity.setName(dto.getName());
        genreRepository.save(entity);
        return new GenreDTO(entity);
    }

    @Transactional
    public GenreDTO update(Long id, GenreDTO dto) {
        try {
            Genre entity = genreRepository.getOne(id);
            entity.setName(dto.getName());
            genreRepository.save(entity);
            return new GenreDTO(entity);
        } catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException("Genre id: " + id + " not found");
        }
    }

    public void delete(Long id) {
        try {
            genreRepository.deleteById(id);
        } catch (EmptyResultDataAccessException e) {
            throw new ResourceNotFoundException("Genre id: " + id + " not found");
        } catch (DataIntegrityViolationException e) {
            throw new DatabaseException("Integrity violation");
        }
    }

}
