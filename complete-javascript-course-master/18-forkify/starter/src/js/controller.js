import { async } from 'regenerator-runtime';
import * as model from './module.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

// https://forkify-api.herokuapp.com/v2
if (module.hot) {
  module.hot.accept();
}

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    // 1. Loading recipe
    await model.loadRecipe(id);

    //2. Reder recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    console.error(error);
    recipeView.renderError();
  }
};

const controlSearchResult = async function () {
  try {
    resultsView.renderSpinner();
    //1.Get search query
    const query = searchView.getQuery();
    if (!query) return;

    //2.Load search results
    await model.loadSearchResult(query);
    // console.log(model.state.search.result);

    // 3.Render search results
    resultsView.render(model.state.search.result);
  } catch (error) {
    console.error(error);
    recipeView.renderError();
  }
};

// showRecipe();
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResult);
};

init();
// window.addEventListener('hashchange', showRecipe);
// window.addEventListener('load', showRecipe);
