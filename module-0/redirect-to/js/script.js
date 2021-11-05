const isUrl = require('is-url');


function redirectTo(nextPageUrl) {
  if(!isUrl(nextPageUrl)) throw new Error('Argument nextPageUrl have to be a url');
  window.location.href = nextPageUrl;
}

function initActionOnScroll() {
  const elements = [...document.querySelectorAll('[data-next-page]')];

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

// *debounce
function debounce(callback, timeout = 500){
  let timerId;
  return (args) => {
    console.log(args);
    clearTimeout(timerId);
    timerId = setTimeout(() => { callback.apply(this, args); }, timeout);
  };
}

// * throttle
function throttle(callback, delay) {
  let last = 0;
  return (args) => {
    const now = new Date().getTime();
    if(now - last < delay) {
      return;
    }
    last = now;
    callback(...args);
  };
}


// TODO use throttle // debounce
window.addEventListener('scroll', debounce(initActionOnScroll, 200));
// window.addEventListener('scroll', throttle(initActionOnScroll, 2000));
