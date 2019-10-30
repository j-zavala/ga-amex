import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const post = {
    title: "I love React",
    author: "CR Harding",
    body: "Suresh doesn't, who trusts him anyway?",
    comments: [
        "That wasn't nice", "Pretty lame post", "I don't know"
    ]
}

ReactDOM.render(<App post={post} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
