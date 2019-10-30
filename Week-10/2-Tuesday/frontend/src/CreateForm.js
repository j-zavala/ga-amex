import React from 'react';

const CreateForm = (props) => {
    return (
        <div>
            <h3>Create A Book!</h3>
            <form onSubmit={props.submitForm}>
                <label htmlFor="author">Author</label>
                <input
                    type="text"
                    label="author"
                    value={props.author}
                    onChange={props.handleAuthorChange}
                    id="author"
                    placeholder="Author name here!"
                />
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    label="title"
                    value={props.title}
                    onChange={props.handleTitleChange}
                    id="title"
                    placeholder="Book title here!"
                />
                <input type="submit" value="Create!" />
            </form>
        </div>
    )
}

export default CreateForm;