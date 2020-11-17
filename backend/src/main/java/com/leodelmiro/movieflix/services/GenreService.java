package com.leodelmiro.movieflix.services;

import com.leodelmiro.movieflix.dto.GenreDTO;
import com.leodelmiro.movieflix.entities.Genre;
import com.leodelmiro.movieflix.repositories.GenreRepository;
import com.leodelmiro.movieflix.services.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class GenreService {

    @Autowired
    private GenreRepository genreRepository;

    @Transactional(readOnly = true)
    public Page<GenreDTO> findAllPaged(PageRequest pageRequest) {
        Page<Genre> list = genreRepository.findAll(pageRequest);
        return list.map(GenreDTO::new);
    }

    @Transactional(readOnly = true)
    public GenreDTO findBydId(Long id) {
        Optional<Genre> obj = genreRepository.findById(id);
        Genre entity = obj.orElseThrow(() -> new ResourceNotFoundException("Genre not found"));
        return new GenreDTO(entity);
    }

}
