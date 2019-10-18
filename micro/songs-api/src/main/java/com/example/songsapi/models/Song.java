package com.example.songsapi.models;

import javax.persistence.*;

@Entity
@Table(name = "songs")
public class Song {
    ///creating columns
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String title;

    @Column(name = "tracks")
    private String track;

    @Column(name = "milliseconds")
    private Double length;

    public Song() {}

    public Song(String title, String track, Double length) {
        this.title = title;
        this.track = track;
        this.length = length;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTrack() {
        return track;
    }

    public void setTrack(String track) {
        this.track = track;
    }

    public Double getLength() {
        return length;
    }

    public void setLength(Double length) {
        this.length = length;
    }

    @Override
    public String toString() {
        return "Song{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", track='" + track + '\'' +
                ", length=" + length +
                '}';
    }
}
