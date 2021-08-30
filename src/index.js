import './styles.css';

import data from './menu.json';

import makeMarkup from './template.hbs';

console.log(data);

const listRefs = document.querySelector('.js-menu');
console.log(listRefs);

console.log(makeMarkup);

const markup = makeMarkup(data);

// listRefs.insertAdjacentHTML('afterbegin', markup);
listRefs.innerHTML = markup;
