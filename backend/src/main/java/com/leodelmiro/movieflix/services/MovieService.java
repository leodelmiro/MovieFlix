package com.leodelmiro.movieflix.services;

import com.leodelmiro.movieflix.dto.MovieDTO;
import com.leodelmiro.movieflix.entities.Movie;
import com.leodelmiro.movieflix.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class MovieService {

    @Autowired
    private MovieRepository movieRepository;

    @Transactional(readOnly = true)
    public Page<MovieDTO> findAllPaged(PageRequest pageRequest){
        Page<Movie> list = movieRepository.findAll(pageRequest);
        return list.map(MovieDTO::new);
    }

}
