import React, { Component } from 'react';

class Ingredients extends Component {
    render() {
        return (
            <div id="Ingredients_cont">
                <h1>Ingredients</h1>
                <ul>
                    <li>{this.props.recipe.ingredients[0]}</li>
                    <li>{this.props.recipe.ingredients[1]}</li>
                    <li>{this.props.recipe.ingredients[2]}</li>
                    <li>{this.props.recipe.ingredients[3]}</li>
                    <li>{this.props.recipe.ingredients[4]}</li>
                    <li>{this.props.recipe.ingredients[5]}</li>
                    <li>{this.props.recipe.ingredients[6]}</li>
                    <li>{this.props.recipe.ingredients[7]}</li>

                </ul>
            </div>
        );
    }
}

export default Ingredients;