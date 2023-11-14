import { async } from 'regenerator-runtime';
import { API_URL, RESULT_PER_PAGE } from './config';
import { getJSON } from './views/helper';

export const state = {
  recipe: {},
  search: {
    query: '',
    result: [],
    resultsPerPage: RESULT_PER_PAGE,
  },
  pagination: {
    maxPage: 0,
    curPage: 1,
  },
  bookmarks: [],
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}/${id}`);
    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      serving: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    if (state.bookmarks.some(bookmark => bookmark.id === id)) {
      state.recipe.bookmarked = true;
    } else state.recipe.bookmarked = false;
    // console.log(state.recipe);
  } catch (error) {
    throw error;
  }
};

export const loadSearchResult = async function (query) {
  try {
    const data = await getJSON(`${API_URL}?search=${query}`);
    const { recipes } = data.data;
    state.search.query = query;
    state.search.result = recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
      };
    });
    state.pagination.maxPage = getMaxPageNumber();
    state.pagination.curPage = 1;
  } catch (error) {
    throw error;
  }
};

export const getSearchResultsPage = function (page = state.pagination.curPage) {
  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;
  return state.search.result.slice(start, end);
};

const getMaxPageNumber = () =>
  Math.ceil(state.search.result.length / state.search.resultsPerPage);
export const increasePage = () => state.pagination.curPage++;
export const decreasePage = () => state.pagination.curPage--;

export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.serving;
  });

  state.recipe.serving = newServings;
};

const persistBookemarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const addBookmark = function (recipe) {
  //Add bookmark
  state.bookmarks.push(recipe);

  //Mark current recipe as bookmark
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;

  persistBookemarks();
};

export const deleteBookmark = function (id) {
  //Delete bookmark
  const index = state.bookmarks.findIndex(el => el.id === id);
  state.bookmarks.splice(index, 1);

  //mark current recipe as NOT bookmarked
  if (id === state.recipe.id) state.recipe.bookmarked = false;

  persistBookemarks();
};

const init = function () {
  const storage = localStorage.getItem('bookmarks');
  if (storage) state.bookmarks = JSON.parse(storage);
};
init();

const clearBookmarks = function () {
  localStorage.clear('bookmarks');
};
// clearBookmarks();
