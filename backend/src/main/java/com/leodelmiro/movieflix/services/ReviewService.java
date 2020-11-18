package com.leodelmiro.movieflix.services;

import com.leodelmiro.movieflix.dto.ReviewDTO;
import com.leodelmiro.movieflix.entities.Review;
import com.leodelmiro.movieflix.repositories.MovieRepository;
import com.leodelmiro.movieflix.repositories.ReviewRepository;
import com.leodelmiro.movieflix.repositories.UserRepository;
import com.leodelmiro.movieflix.services.exceptions.DatabaseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private UserRepository userRepository;

    @Transactional
    public ReviewDTO insert(ReviewDTO dto) {
        Review entity = new Review();
        try {
            entity.setMovie(movieRepository.getOne(dto.getMovieId()));
            entity.setUser(userRepository.getOne(dto.getUserId()));
            entity.setText(dto.getText());

            reviewRepository.save(entity);

            return new ReviewDTO(entity);
        } catch (DataIntegrityViolationException e) {
            throw new DatabaseException("Movie Id: " + dto.getMovieId() + " or User Id: " + dto.getUserId() + " invalid!");
        }
    }
}
