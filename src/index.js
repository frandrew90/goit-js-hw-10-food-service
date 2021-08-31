import './styles.css';

import data from './menu.json';

import makeMarkup from './template.hbs';

import LS from './LS';

const listRefs = document.querySelector('.js-menu');

const markup = makeMarkup(data);

// listRefs.insertAdjacentHTML('afterbegin', markup);
listRefs.innerHTML = markup;

// -----------------------------------------------------------------

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const THEME = 'theme';

const inputRefs = document.querySelector('#theme-switch-toggle');

inputRefs.addEventListener('change', onThemeSwitch);

// document.body.classList.add(Theme.LIGHT);

function upgradeClass(addClass, removeClass) {
  document.body.classList.add(addClass);
  document.body.classList.remove(removeClass);
}

function onThemeSwitch(e) {
  const isChecked = e.target.checked;
  if (isChecked) {
    upgradeClass(Theme.DARK, Theme.LIGHT);
    // document.body.classList.add(Theme.DARK);
    // document.body.classList.remove(Theme.LIGHT);
    LS.save(THEME, Theme.DARK);
    return;
  }

  upgradeClass(Theme.LIGHT, Theme.DARK);
  //   document.body.classList.add(Theme.LIGHT);
  //   document.body.classList.remove(Theme.DARK);
  LS.save(THEME, Theme.LIGHT);
}

//   if (document.body.classList.contains(Theme.LIGHT)) {
//     document.body.classList.add(Theme.DARK);
//     document.body.classList.remove(Theme.LIGHT);
//     // localStorage.setItem('theme', Theme.DARK);
//     LS.save('theme', Theme.DARK);
//   } else {
//     document.body.classList.remove(Theme.DARK);
//     document.body.classList.add(Theme.LIGHT);
//     // localStorage.setItem('theme', Theme.LIGHT);
//     LS.save('theme', Theme.LIGHT);
//   }
// }

// let theme = localStorage.getItem('theme');
// console.log(theme);

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

// console.log(theme);

// const chekTheme = function () {
//   if (theme === Theme.DARK) {
//     inputRefs.checked = true;
//     document.body.classList.add(Theme.DARK);
//   }
//   inputRefs.checked = false;
//   document.body.classList.add(Theme.LIGHT);
// };
// chekTheme();

// function upgradeClass(addClass, removeClass) {
//   document.body.classList.add(addClass);
//   document.body.classList.remove(removeClass);
// }
