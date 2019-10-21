import React, { Component } from 'react'

class RecipeHeader extends Component {
    render() {
        return (
            <div className="flex-container">
                <header>
                    <h1>CHICKEN TIKKA MASALA!</h1>
                    <cite class="contributors">
                        <div>By John Doe</div>
                        <div><a href="https://cooking.nytimes.com/recipes/5593-chicken-and-apricot-masala" target="_blank">Source</a></div>
                    </cite>
                    <ul id="recipe_meta_data" class="list-group">
                        <li class="list-group-item">Active: 1 Hour</li>
                        <li class="list-group-item">Total: 5 Hours</li>
                        <li class="list-group-item">6 Servings</li>
                    </ul>
                </header>
                
            </div>
        );
    }
}

export default RecipeHeader;