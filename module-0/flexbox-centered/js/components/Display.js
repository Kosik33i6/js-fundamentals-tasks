import {isDOMElement} from '../utils';
import {classNames, select} from '../setting';

class Display {
  constructor(display) {
    if(!isDOMElement) throw new Error('Argument display have to be a DOM element');

    this.displayElement = display;
    this.image = this.displayElement.querySelector(select.gallery.image);
    this.initActions();
  }

  initActions() {
    this.displayElement.addEventListener('click', () => this.closeFullScreen());
  }

  closeFullScreen() {
    this.displayElement.classList.remove(classNames.gallery.displayActive);
  }

  openFullScreen(imageSrc) {
    const isString = typeof imageSrc === 'string';
    if(!isString) throw new Error('Argument imageSrc have to ba a string type');

    this.displayElement.classList.add(classNames.gallery.displayActive);
    this.image.src = imageSrc;
  }
}

export default Display;
