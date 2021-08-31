import './styles.css';

import data from './menu.json';

import makeMarkup from './template.hbs';

const listRefs = document.querySelector('.js-menu');

const markup = makeMarkup(data);

// listRefs.insertAdjacentHTML('afterbegin', markup);
listRefs.innerHTML = markup;
