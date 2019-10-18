package com.example.songsapi.controllers;

import com.example.songsapi.models.Song;
import com.example.songsapi.services.SongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
public class SongController {

    @Autowired
    SongService songService;

    // CREATE
    @PostMapping("/create")
    public HttpStatus createSong(@RequestBody Song newSong) {
        return songService.createSongs(newSong);
    }

    // READ
    @GetMapping("/all")
    public Iterable<Song> getAll() { return songService.getAll(); }

    // UPDATE
    //This annotation is used on the method parameter we want to populate.
    //the template variable name (between the curly braces) and the parameter name should match.
    //@PatchMapping is for doing a partial update vs. @PutMapping which does a full resource update
    @PatchMapping("/update/{id}")
    public HttpStatus updateSong(@PathVariable long id, @RequestBody Song songsRequest) {
        return songService.updateSongs(id, songsRequest);
    }

    // DELETE
    @DeleteMapping("/delete/{id}")
    public HttpStatus deleteSong(@PathVariable long id) {
        return songService.deleteSongs(id);
    }


}
