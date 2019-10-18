package com.example.songsapi.services;

import com.example.songsapi.models.Song;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public interface SongService {

    // CREATE
    public HttpStatus createSongs(Song song);

    // READ
    public Iterable<Song> getAll();

    // UPDATE
    public HttpStatus updateSongs(Long id, Song songRequest);

    // DELETE
    public HttpStatus deleteSongs(Long id);
}
