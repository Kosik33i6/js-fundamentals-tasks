import Image from './components/Image';
import {select} from './setting';

const app = {
  initGallery() {
    const images = Array.from(document.querySelectorAll(select.gallery.imageWrapper));

    for(let i = 0; i < images.length; i += 1) {
      const image = new Image(images[i]);
      image.initActions();
    }
  },

  init() {
    console.log('init app');
    this.initGallery();
  }
};

app.init();
