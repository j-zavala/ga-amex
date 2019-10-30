import React from 'react';

export default function FilmDetails(props) {
    return (
        <div className="film-details">
            <h1 className="section-title">DETAILS</h1>
            <h2>{props.film.overview}</h2>
        </div>
    );
}
