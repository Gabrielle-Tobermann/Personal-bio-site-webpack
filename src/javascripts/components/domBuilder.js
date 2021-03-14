import projects from '../helpers/data/projectsData';
import navEvents from '../helpers/navEvents';
import createProjectCards from './createProjectCards';

const domBuilder = () => {
  navEvents();
  createProjectCards(projects);
};

export default domBuilder;
