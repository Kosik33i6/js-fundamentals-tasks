const isUrl = require('is-url');

const elements = [...document.querySelectorAll('[data-next-page]')];

function redirectTo(nextPageUrl) {
  if(!isUrl(nextPageUrl)) throw new Error('Argument nextPageUrl have to be a url');
  window.location.href = nextPageUrl;
}

function initActionOnScroll() {
  if(elements.length !== 1) return;

  const element = [...elements].pop();
  const elementOffsetTop = element.offsetTop;
  const elementHeight = element.clientHeight;
  const windowHeight = window.innerHeight;
  const scrollValue = window.scrollY;

  const isElementScrolled = elementOffsetTop + elementHeight < scrollValue + windowHeight / 2;
  if(isElementScrolled) {
    redirectTo('https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY');
  }
}

window.addEventListener('scroll', initActionOnScroll);
