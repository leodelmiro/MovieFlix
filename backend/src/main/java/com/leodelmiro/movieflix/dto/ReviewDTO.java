package com.leodelmiro.movieflix.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.leodelmiro.movieflix.entities.Review;

import java.io.Serializable;

public class ReviewDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;

    private String text;

    private Long movieId;

    @JsonProperty("user")
    private UserDTO userDTO;

    public ReviewDTO() {

    }

    public ReviewDTO(Long id, String text, Long movieId, UserDTO userDTO) {
        this.id = id;
        this.text = text;
        this.movieId = movieId;
        this.userDTO = userDTO;
    }

    public ReviewDTO(Review entity) {
        id = entity.getId();
        text = entity.getText();
        movieId = entity.getMovie().getId();
        userDTO = new UserDTO(entity.getUser());
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Long getMovieId() {
        return movieId;
    }

    public void setMovieId(Long movieId) {
        this.movieId = movieId;
    }

    public UserDTO getUserDTO() {
        return userDTO;
    }

    public void setUserDTO(UserDTO userDTO) {
        this.userDTO = userDTO;
    }
}
