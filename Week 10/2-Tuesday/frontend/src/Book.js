import React from 'react';

const Book = props => {
    return (
        <div>
            <p>{props.book.title}</p>
            <p>{props.book.author}</p>
        </div>
    )
}

export default Book;