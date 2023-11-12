import View from './View';
import icons from '../../img/icons.svg';

class ResultsView extends View {
  _parentEl = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again.';
  _generateMarkup() {
    return this._data.map(dt => this._generateMarkupPreview(dt)).join('');
  }

  _generateMarkupPreview(result) {
    return `
        <li class="preview">
            <a class="preview__link preview__link" href="#${result.id}">
                <figure class="preview__fig">
                    <img src="${result.image}" alt="${result.title}" />
                </figure>
                <div class="preview__data">
                    <h4 class="preview__title">${result.title}</h4>
                    <p class="preview__publisher">${result.publisher}</p>
                    
                </div>
            </a>
        </li>
    `;
  }
}

export default new ResultsView();