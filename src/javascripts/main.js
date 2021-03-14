import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import createProjectCards from './components/createProjectCards';
import domBuilder from './components/domBuilder';
import projects from './helpers/data/projectsData';

const init = () => {
  createProjectCards(projects);
  domBuilder();
};

init();
