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
