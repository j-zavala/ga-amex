package com.example.songsapi.services;

import com.example.songsapi.models.Song;
import com.example.songsapi.repositories.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class SongServiceImpl implements SongService {
    @Autowired
    SongRepository songRepository;

    // CREATE
    @Override
    public HttpStatus createSongs(Song song) {
        songRepository.save(song);
        return HttpStatus.OK;
    }

    // READ
    @Override
    public Iterable<Song> getAll() {
        return songRepository.findAll();
    }

    // UPDATE
    @Override
    public HttpStatus updateSongs(Long id, Song songRequest) {
        Song songToUpdate = songRepository.findById(id).get();
        songToUpdate.setId(songRequest.getId());
        songToUpdate.setLength(songRequest.getLength());
        songToUpdate.setTitle(songRequest.getTitle());
        songRepository.save(songToUpdate);
        return HttpStatus.OK;
    }

    // DELETE
    @Override
    public HttpStatus deleteSongs(Long id) {
        songRepository.deleteById(id);
        return HttpStatus.OK;
    }

}
