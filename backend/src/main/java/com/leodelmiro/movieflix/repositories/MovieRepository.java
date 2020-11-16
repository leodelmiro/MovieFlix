package com.leodelmiro.movieflix.repositories;

import com.leodelmiro.movieflix.entities.Movie;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {

    @Query("SELECT obj FROM Movie obj " +
            "INNER JOIN obj.genre genre WHERE " +
            "(:genreId <= 0L) OR " +
            "(genre.id = :genreId)")
    Page<Movie> find(Long genreId, Pageable pageable);
}
