import View from './View';
import icons from '../../img/icons.svg';

class PaginationView extends View {
  _parentEl = document.querySelector('.pagination');
  _prevBtn = document.querySelector('.pagination__btn--prev');
  _nextBtn = document.querySelector('.pagination__btn--next');
  eventClickNextBtn(handler) {
    this._nextBtn.addEventListener('click', handler);
  }
  eventClickPrevBtn(handler) {
    this._prevBtn.addEventListener('click', handler);
  }

  addHandlerClick(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      if (btn.dataset.goto === 'next') handler[1]();
      else if (btn.dataset.goto === 'prev') handler[0]();
    });
  }

  _generateNextbtn(page) {
    return `
    <button data-goto="next" class="btn--inline pagination__btn--next">
        <span>Page ${page}</span>
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
        </svg>
    </button>
    `;
  }

  _generateMidbtn(page) {
    return `
    <button data-goto="next" class="btn--inline pagination__btn--mid">
        <span>${page}</span>
    </button>
    `;
  }

  _generatePrevbtn(page) {
    return `
    <button data-goto="prev" class="btn--inline pagination__btn--prev">
        <span>Page ${page}</span>
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
        </svg>
    </button>
    `;
  }

  _generateHiddenbtn() {
    return `
    <button data-goto="next" class="btn--inline hidden">
        <span>Page x</span>
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
        </svg>
    </button>
    `;
  }

  _generateMarkup() {
    if (this._data.maxPage <= 1) {
      return '';
    }

    if (this._data.curPage === 1) {
      return `
        ${this._generateHiddenbtn()}
        ${this._generateMidbtn(this._data.curPage)}
        ${this._generateNextbtn(this._data.curPage + 1)}
      `;
    }
    if (this._data.curPage === this._data.maxPage) {
      return `
        ${this._generatePrevbtn(this._data.curPage - 1)}
        ${this._generateMidbtn(this._data.curPage)}
        ${this._generateHiddenbtn()}
      `;
    } else {
      return `
      ${this._generatePrevbtn(this._data.curPage - 1)}
      ${this._generateMidbtn(this._data.curPage)}
      ${this._generateNextbtn(this._data.curPage + 1)}
    `;
    }
  }
}
export default new PaginationView();
