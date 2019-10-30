import React from 'react';

export default function FilmListing(props) {
    return (
        <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <h2>{props.film.title}</h2>
        </div>
    );
}
