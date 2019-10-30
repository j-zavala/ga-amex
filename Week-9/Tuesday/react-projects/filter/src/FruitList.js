import React from 'react';
const FruitList = props => (
    <ul>
        {props.fruits.map((fruit, key) => <li key={key}>{fruit}</li>)}
    </ul>
)
export default FruitList;
