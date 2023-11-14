import View from './View';
import icons from '../../img/icons.svg';

class AddRecipeView extends View {
  _parentEl = document.querySelector('.upload');

  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn__close-modal');

  addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', function () {
      this._overlay;
    });
  }

  _generateMarkup() {}
}
export default new AddRecipeView();
