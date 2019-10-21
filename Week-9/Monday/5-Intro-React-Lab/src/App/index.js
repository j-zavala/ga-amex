import React, { Component } from 'react';
import './style.css';

import recipes from '../data/recipes';
import Nav from '../Components/Nav';
import Recipe from '../Components/Recipe';
import RecipeHeader from '../Components/RecipeHeader';
import Footer from '../Components/Footer';

const recipe = recipes[0];

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <RecipeHeader />
        <Recipe />
        <Footer />
      </div>
    );
  }
}

export default App;
