import './styles.css';

import data from './menu.json';

import makeMarkup from './template.hbs';

import LS from './LS';

const listRefs = document.querySelector('.js-menu');

const markup = makeMarkup(data);

listRefs.innerHTML = markup;

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const THEME = 'theme';

const inputRefs = document.querySelector('#theme-switch-toggle');

inputRefs.addEventListener('change', onThemeSwitch);

function upgradeClass(addClass, removeClass) {
  document.body.classList.add(addClass);
  document.body.classList.remove(removeClass);
}

function onThemeSwitch(e) {
  const isChecked = e.target.checked;
  if (isChecked) {
    upgradeClass(Theme.DARK, Theme.LIGHT);

    LS.save(THEME, Theme.DARK);
    return;
  }

  upgradeClass(Theme.LIGHT, Theme.DARK);

  LS.save(THEME, Theme.LIGHT);
}

let theme = LS.load(THEME);

const chekTheme = function () {
  if (theme) {
    document.body.classList.add(theme);
    if (theme === Theme.DARK) {
      inputRefs.checked = true;
    }
  }
};

chekTheme();
