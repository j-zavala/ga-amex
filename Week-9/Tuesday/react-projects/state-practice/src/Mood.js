import React from 'react';

const Mood = props => {
    return (
        <div>
            <p>On a scale of 1-10</p>
            <p>You are this {props.mood}: {this.state.moodPoints - 1}</p>
            <button onClick={changeMood}>Cheer up, Casey!</button>
            <button onClick={increaseMood}>Feel better, Casey!</button>
            <button onClick={decreaseMood}>Don't Feel better, Casey!</button>

        </div>
    );

}

export default Mood;