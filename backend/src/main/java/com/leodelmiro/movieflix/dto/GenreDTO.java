package com.leodelmiro.movieflix.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.leodelmiro.movieflix.entities.Genre;
import com.leodelmiro.movieflix.entities.Movie;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

public class GenreDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;
    private String name;

    @JsonIgnore
    private Set<MovieDTO> movies = new HashSet<>();

    public GenreDTO(){

    }

    public GenreDTO(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public GenreDTO(Genre entity){
        id = entity.getId();
        name = entity.getName();
    }

    public GenreDTO(Genre entity, Set<MovieDTO> movies){
        this(entity);
        this.movies = movies;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<MovieDTO> getMovies() {
        return movies;
    }
}
