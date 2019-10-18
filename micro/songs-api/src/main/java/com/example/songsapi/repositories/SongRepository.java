package com.example.songsapi.repositories;

import com.example.songsapi.models.Song;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SongRepository extends JpaRepository<Song, Long> {
//    For the above queries, the status method parameter will be assigned to the query parameter with index 1,
//    and the name method parameter will be assigned to the query parameter with index 2.
//    @Query("FROM User u WHERE u.title = ?1 and u.track = ?2 and u.length = ?3")
//    public Song findByTitle(Song title);

    public List<Song> findByTitleContains(String title);
}
