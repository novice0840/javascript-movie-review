import '../css/reset.css';
import '../css/common.css';

import MovieListManager from './domain/MovieListManager';
import { $ } from './util/querySelector';
import Header from './components/Header';
import Main from './components/Main';
import LocalStorage from './util/LocalStorage';
import renderComponents from './util/renderComponents';

const manager = new MovieListManager(LocalStorage);

const header = new Header($('header'), manager);
const main = new Main($('.item-view'), manager);

renderComponents(header, main);

document.addEventListener('searchPending', () => {
  main.renderSkeleton();
});

document.addEventListener('searchFullfilled', () => {
  main.render();
});
