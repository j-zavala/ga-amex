import React from 'react';

const FruitFilter = props => (
    <div>
        <label htmlFor="fruit-filter">Filter these fruits!</label>
        <input type="text" value={props.value} onChange={props.onChange} name="fruit-filter" />
    </div>
)

export default FruitFilter;