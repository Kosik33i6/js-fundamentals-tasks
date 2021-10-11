import {isDOMElement, isListElementHaveCorrectTagName} from '../utils';
import Display from './Display';
import {select} from '../setting';

class Image {
  constructor(imageWrapper) {
    if(!isDOMElement) throw new Error('Argument image have to be a DOM element');
    if(!isListElementHaveCorrectTagName) throw new Error('Argument image have must be a li tag');

    this.imageWrapper = imageWrapper;
    this.image = this.imageWrapper.querySelector(select.gallery.image);
  }

  initActions() {
    this.imageWrapper.addEventListener('click', (event) => {
      event.preventDefault();
      this.renderDisplay();
    });
  }

  renderDisplay() {
    const displayElement = document.querySelector(select.gallery.display);
    const display = new Display(displayElement);
    const imageSrc = this.image.src;

    display.openFullScreen(imageSrc);
  }

}

export default Image;
