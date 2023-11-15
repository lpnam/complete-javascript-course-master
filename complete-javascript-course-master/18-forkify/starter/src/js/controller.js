import { async } from 'regenerator-runtime';
import * as model from './module.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { MODAL_CLOSE_SEC } from './config.js';

// https://forkify-api.herokuapp.com/v2
// if (module.hot) {
//   module.hot.accept();
// }

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    //0. Update results view to mark selected search result
    resultsView.update(model.getSearchResultsPage());
    //0.5. Updating bookmark view
    bookmarksView.update(model.state.bookmarks);
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
    resultsView.render(
      model.getSearchResultsPage(model.state.pagination.curPage)
    );
    //4. Render pagination
    paginationView.render(model.state.pagination);
    // paginationView.eventClickNextBtn(paginationNextPage);
    // paginationView.eventClickPrevBtn(paginationPrevPage);
  } catch (error) {
    console.error(error);
    recipeView.renderError();
  }
};

const paginationNextPage = function () {
  model.increasePage();
  paginationView.render(model.state.pagination);
  resultsView.render(
    model.getSearchResultsPage(model.state.pagination.curPage)
  );
};

const paginationPrevPage = function () {
  model.decreasePage();
  paginationView.render(model.state.pagination);
  resultsView.render(
    model.getSearchResultsPage(model.state.pagination.curPage)
  );
};

const controlServings = function (newServings) {
  // Update the recipe serving (in state)
  model.updateServings(newServings);
  // Update the recipe view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // 1. Add/remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  //2.Update recipe view
  recipeView.update(model.state.recipe);

  //3.Render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmark = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    //Show loading spinner
    addRecipeView.renderSpinner();

    //Upload new recipe data
    await model.uploadRecipe(newRecipe);

    //Render
    recipeView.render(model.state.recipe);

    //Success messasge
    addRecipeView.renderMessage();
    //Close form window
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (error) {
    console.error(error);
    addRecipeView.renderError(error.message);
  }
};

// showRecipe();
const init = function () {
  bookmarksView.addHandlerRender(controlBookmark);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResult);
  paginationView.addHandlerClick([paginationPrevPage, paginationNextPage]);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};
init();
// window.addEventListener('hashchange', showRecipe);
// window.addEventListener('load', showRecipe);
